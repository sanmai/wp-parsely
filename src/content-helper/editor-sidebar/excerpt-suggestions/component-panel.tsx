/**
 * WordPress dependencies
 */
import {
	Animate,
	Button,
	Icon,
	Notice,
	TextareaControl,
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as editorStore, PostTypeSupportCheck } from '@wordpress/editor';
import { useEffect, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { external } from '@wordpress/icons';
import { count } from '@wordpress/wordcount';
import { PluginDocumentSettingPanel } from '../../../@types/gutenberg/wrapper';
import { PersonaProp } from '../../common/components/persona-selector';
import { ToneProp } from '../../common/components/tone-selector';

/**
 * Internal dependencies
 */
import { GutenbergFunction } from '../../../@types/gutenberg/types';
import { Telemetry } from '../../../js/telemetry/telemetry';
import {
	ContentHelperError,
	ContentHelperErrorCode,
} from '../../common/content-helper-error';
import { LeafIcon } from '../../common/icons/leaf-icon';
import {
	SidebarSettings,
	ExcerptSuggestionsSettings as ExcerptSuggestionsSettingsType,
	SettingsProvider,
	useSettings,
} from '../../common/settings';
import { getSettingsFromJson } from '../editor-sidebar';
import { ExcerptSuggestionsProvider } from './provider';
import { ExcerptSuggestionsSettings } from './component-panel-settings';

/**
 * Defines the structure of an object that holds excerpt data.
 *
 * @since 3.16.0
 */
interface ExcerptData {
	currentExcerpt: string;
	isUnderReview: boolean;
	newExcerptGeneratedCount: number;
	oldExcerpt: string;
}

/**
 * The PostExcerptSuggestions component displays the excerpt textarea and the Parse.ly AI controls.
 *
 * @since 3.13.0
 */
const PostExcerptSuggestions = () => {
	const { settings, setSettings } = useSettings<SidebarSettings>();

	const [ error, setError ] = useState<ContentHelperError>();
	const [ excerptData, setExcerptData ] = useState<ExcerptData>( {
		currentExcerpt: '',
		isUnderReview: false,
		newExcerptGeneratedCount: 0,
		oldExcerpt: '',
	} );
	const [ isLoading, setLoading ] = useState<boolean>( false );
	const [ onChangeFired, setOnChangeFired ] = useState<boolean>( false );
	const [ persona, setPersona ] = useState<PersonaProp>( settings.ExcerptSuggestions.Persona );
	const [ tone, setTone ] = useState<ToneProp>( settings.ExcerptSuggestions.Tone );
	const [ wordCountString, setWordCountString ] = useState<string>( '' );

	const { editPost } = useDispatch( editorStore );

	/**
	 * Handles changes to the excerpt suggestions settings.
	 *
	 * @since 3.17.0
	 *
	 * @param {keyof ExcerptSuggestionsSettingsType} key   The setting key that changed.
	 *
	 * @param {string|boolean}                       value The new value of the setting.
	 */
	const onSettingChange = ( key: keyof ExcerptSuggestionsSettingsType, value: string | boolean ) => {
		setSettings( {
			ExcerptSuggestions: {
				...settings.ExcerptSuggestions,
				[ key ]: value },
		} );
	};

	// Get the current excerpt, post content, and post title.
	const { excerpt, postContent, postTitle } = useSelect( ( select ) => {
		const { getEditedPostAttribute, getEditedPostContent } = select( editorStore ) as GutenbergFunction;

		let content = getEditedPostContent();
		if ( ! content ) {
			content = '';
		}

		const document = new window.DOMParser().parseFromString( content, 'text/html' );
		const documentRawText = ( document.body.textContent ?? document.body.innerText ) || '';

		// Keep only one break line (\n) between blocks.
		content = documentRawText.replace( /\n{2,}/g, '\n' ).trim();

		return {
			excerpt: getEditedPostAttribute( 'excerpt' ) ?? '',
			postContent: content,
			postTitle: getEditedPostAttribute( 'title' ),
		};
	}, [] );

	// Update the word count string when the excerpt changes.
	useEffect( () => {
		/**
		 * Returns a descriptive text for the textarea's word count.
		 *
		 * @since 3.16.0
		 *
		 * @return {string} The word count string.
		 */
		const getWordCountString = (): string => {
			const wordCount = count( excerptData.currentExcerpt || excerpt, 'words', {} );

			if ( wordCount > 0 ) {
				return sprintf(
					// Translators: %1$s the number of words in the excerpt.
					_n( '%1$s word', '%1$s words', wordCount, 'wp-parsely' ),
					wordCount
				);
			}

			return '';
		};

		setWordCountString( getWordCountString() );
	}, [ excerptData.currentExcerpt, excerpt ] );

	// Scroll the textarea to the top when the generated excerpt changes.
	useEffect( () => {
		const textarea = document.querySelector( '.editor-post-excerpt textarea' );
		if ( textarea ) {
			textarea.scrollTop = 0;
		}
	}, [ excerptData.newExcerptGeneratedCount ] );

	/**
	 * Generates an excerpt using Parse.ly AI.
	 *
	 * @since 3.13.0
	 */
	const generateExcerpt = async () => {
		setLoading( true );
		setError( undefined );

		try {
			Telemetry.trackEvent( 'excerpt_generator_pressed' );
			const requestedExcerpt = await ExcerptSuggestionsProvider
				.getInstance()
				.generateExcerpt( postTitle, postContent, persona, tone );

			setExcerptData( {
				currentExcerpt: requestedExcerpt,
				isUnderReview: true,
				newExcerptGeneratedCount: excerptData.newExcerptGeneratedCount + 1,
				oldExcerpt: excerpt,
			} );
		} catch ( err: unknown ) {
			if ( err instanceof ContentHelperError ) {
				setError( err );
			} else {
				setError( new ContentHelperError( __( 'An unknown error occurred.', 'wp-parsely' ), ContentHelperErrorCode.UnknownError ) );
				console.error( err ); // eslint-disable-line no-console
			}
		} finally {
			setLoading( false );
		}
	};

	/**
	 * Accepts the generated excerpt and updates the post.
	 *
	 * @since 3.13.0
	 */
	const acceptGeneratedExcerpt = async () => {
		await editPost( { excerpt: excerptData.currentExcerpt } );
		setExcerptData( { ...excerptData, isUnderReview: false } );
		Telemetry.trackEvent( 'excerpt_generator_accepted' );
	};

	/**
	 * Discards the generated excerpt.
	 *
	 * @since 3.13.0
	 */
	const discardGeneratedExcerpt = async () => {
		editPost( { excerpt: excerptData.oldExcerpt } );
		setExcerptData( {
			...excerptData,
			currentExcerpt: excerptData.oldExcerpt, // Updates word count in UI.
			isUnderReview: false,
		} );
		Telemetry.trackEvent( 'excerpt_generator_discarded' );
	};

	/**
	 * Returns the value for the excerpt textarea.
	 *
	 * @since 3.13.0
	 */
	const getExcerptTextareaValue = (): string => {
		if ( excerptData.isUnderReview ) {
			return excerptData.currentExcerpt;
		}

		return excerpt;
	};

	const generateWithParselyHeader =
		<div className="wp-parsely-excerpt-generator-header">
			<LeafIcon size={ 16 } />
			<div className="wp-parsely-excerpt-generator-header-label">
				{ __( 'Generate With Parse.ly', 'wp-parsely' ) }
				<span className="beta-label">{ __( 'Beta', 'wp-parsely' ) }</span>
			</div>
		</div>;

	return (
		<div className="editor-post-excerpt" >
			<div style={ { position: 'relative' } }>
				{ isLoading && (
					<div className={ 'editor-post-excerpt__loading_animation' }>
						<LoadingAnimation />
					</div>
				) }
				<TextareaControl
					__nextHasNoMarginBottom
					label={ __( 'Write an excerpt (optional)', 'wp-parsely' ) }
					className="editor-post-excerpt__textarea"
					onChange={ ( value ) => {
						if ( ! excerptData.isUnderReview ) {
							editPost( { excerpt: value } );
						}
						setExcerptData( { ...excerptData, currentExcerpt: value } );
						setOnChangeFired( true );
					} }
					onKeyUp={ () => { // Make word count work with Keyboard shortcuts.
						if ( onChangeFired ) {
							setOnChangeFired( false );
							return;
						}

						const textarea = document.querySelector( '.editor-post-excerpt textarea' );
						const value = textarea?.textContent ?? '';

						setExcerptData( { ...excerptData, currentExcerpt: value } );
					} }
					value={ isLoading ? '' : getExcerptTextareaValue() }
					help={ wordCountString ? wordCountString : null }
				/>
			</div>
			<Button
				href={ __(
					'https://wordpress.org/documentation/article/page-post-settings-sidebar/#excerpt',
					'wp-parsely',
				) }
				target="_blank"
				variant="link"
			>
				{ __( 'Learn more about manual excerpts', 'wp-parsely' ) }
				<Icon
					icon={ external }
					size={ 18 }
					className="parsely-external-link-icon"
				/>
			</Button>
			<div className="wp-parsely-excerpt-generator">
				{ error && (
					<Notice
						className="wp-parsely-excerpt-generator-error"
						onRemove={ () => setError( undefined ) }
						status="info"
					>
						{ error.Message() }
					</Notice>
				) }
				{ excerptData.isUnderReview ? (
					<>
						{ generateWithParselyHeader }
						<div className="wp-parsely-excerpt-suggestions-review-controls">
							<Button
								variant="secondary"
								onClick={ acceptGeneratedExcerpt }
							>
								{ __( 'Accept', 'wp-parsely' ) }
							</Button>
							<Button
								isDestructive={ true }
								variant="secondary"
								onClick={ discardGeneratedExcerpt }
							>
								{ __( 'Discard', 'wp-parsely' ) }
							</Button>
						</div>
					</>
				) : (
					<>
						<ExcerptSuggestionsSettings
							isLoading={ isLoading }
							onPersonaChange={ ( selectedPersona ) => {
								onSettingChange( 'Persona', selectedPersona );
								setPersona( selectedPersona );
							} }
							onSettingChange={ onSettingChange }
							onToneChange={ ( selectedTone ) => {
								onSettingChange( 'Tone', selectedTone );
								setTone( selectedTone );
							} }
							persona={ settings.ExcerptSuggestions.Persona }
							tone={ settings.ExcerptSuggestions.Tone }
						/>
						{ generateWithParselyHeader }
						<div className="excerpt-suggestions-generate">
							<Button
								onClick={ generateExcerpt }
								variant="primary"
								isBusy={ isLoading }
								disabled={ isLoading || ! postContent }
							>
								{ isLoading && __( 'Generating Excerpt…', 'wp-parsely' ) }
								{ ! isLoading && excerptData.newExcerptGeneratedCount > 0 &&
									__( 'Regenerate Excerpt', 'wp-parsely' )
								}
								{ ! isLoading && excerptData.newExcerptGeneratedCount === 0 &&
									__( 'Generate Excerpt', 'wp-parsely' )
								}
							</Button>
						</div>
					</>
				) }
				<Button
					href="https://docs.parse.ly/plugin-content-helper/#h-excerpt-generator-beta"
					target="_blank"
					variant="link"
				>
					{ __( 'Learn more about Parse.ly AI', 'wp-parsely' ) }
					<Icon
						icon={ external }
						size={ 18 }
						className="parsely-external-link-icon"
					/>
				</Button>
			</div>
		</div>
	);
};

/**
 * Component that renders a loading animation.
 *
 * @since 3.14.0
 *
 * @return {import('react').JSX.Element} The loading animation component.
 */
const LoadingAnimation = (): React.JSX.Element => {
	return (
		<Animate type="loading">
			{ ( { className } ) => (
				<span className={ className }>
					{ __( 'Generating…', 'wp-parsely' ) }
				</span>
			) }
		</Animate>
	);
};

/**
 * The ExcerptPanel component verifies that the current post type supports excerpts,
 * and then renders the PostExcerptSuggestions component.
 *
 * @since 3.13.0
 */
export const ExcerptPanel = () => {
	return (
		<PostTypeSupportCheck supportKeys="excerpt">
			<PluginDocumentSettingPanel
				name="parsely-post-excerpt"
				title={ __( 'Excerpt', 'wp-parsely' ) }
			>
				<SettingsProvider
					endpoint="editor-sidebar"
					defaultSettings={ getSettingsFromJson(
						window.wpParselyContentHelperSettings
					) }
				>
					<PostExcerptSuggestions />
				</SettingsProvider>
			</PluginDocumentSettingPanel>
		</PostTypeSupportCheck>
	);
};
