/**
 * WordPress dependencies
 */
import { dispatch } from '@wordpress/data';
import { addFilter, removeFilter } from '@wordpress/hooks';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { dispatchCoreEditPost } from '../../@types/gutenberg/types';
import {
	ExcerptSuggestionsSettings,
	SettingsProvider,
} from '../common/settings';
import { ExcerptPanel } from './components/excerpt-panel';

// TODO: Get the plugin ID from the editor sidebar file.
const PARSELY_SIDEBAR_PLUGIN_ID = 'wp-parsely-block-editor-sidebar';

/**
 * Gets the settings from the passed JSON.
 *
 * If missing settings or invalid values are detected, they get set to their
 * defaults.
 *
 * @since 3.17.0
 *
 * @param {string} settingsJson The JSON containing the settings.
 *
 * @return {ExcerptSuggestionsSettings} The resulting settings object.
 */
const getSettingsFromJson = (
	settingsJson: string
): ExcerptSuggestionsSettings => {
	let parsedSettings: ExcerptSuggestionsSettings;

	try {
		parsedSettings = JSON.parse( settingsJson );
	} catch ( e ) {
		// Return defaults when parsing failed or the string is empty.
		return {
			Open: false,
			Persona: 'journalist',
			Tone: 'neutral',
		};
	}

	// Fix invalid values if any are found.
	if ( typeof parsedSettings?.Open !== 'boolean' ) {
		parsedSettings.Open = false;
	}
	if ( typeof parsedSettings?.Persona !== 'string' ) {
		parsedSettings.Persona = 'journalist';
	}
	if ( typeof parsedSettings?.Tone !== 'string' ) {
		parsedSettings.Tone = 'neutral';
	}

	return parsedSettings;
};

/**
 * The ExcerptGenerator function registers the custom excerpt panel and removes
 * the default excerpt panel.
 *
 * @since 3.13.0
 *
 * @param {never}  settings Settings from the plugins.registerPlugin filter. Not used.
 * @param {string} name     The plugin name.
 */
const ExcerptGenerator = ( settings: never, name: string ) => {
	if ( name !== PARSELY_SIDEBAR_PLUGIN_ID ) {
		return settings;
	}

	const isJetpackAiEnabled =
		window?.Jetpack_Editor_Initial_State?.available_blocks[ 'ai-content-lens' ];

	if ( isJetpackAiEnabled ) {
		// eslint-disable-next-line no-console
		console.log( 'Parse.ly: Jetpack AI is enabled and will be disabled.' );

		// Remove Jetpack AI excerpt block.
		// https://github.com/Automattic/jetpack/blob/trunk/projects/plugins/jetpack/extensions/plugins/ai-content-lens/editor.js#L52-L56
		removeFilter( 'blocks.registerBlockType', 'jetpack/ai-content-lens-features' );
	}

	// Register the custom excerpt panel.
	registerPlugin( 'wp-parsely-excerpt-generator', {
		render: () => (
			<SettingsProvider
				endpoint="excerpt-suggestions"
				defaultSettings={ getSettingsFromJson(
					window.wpParselyContentHelperSettings
				) }
			>
				<ExcerptPanel />
			</SettingsProvider>
		),
	} );

	/* Remove the excerpt panel by dispatching an action. */ // @ts-ignore
	if ( dispatch( 'core/editor' )?.removeEditorPanel ) { // @ts-ignore
		dispatch( 'core/editor' )?.removeEditorPanel( 'post-excerpt' );
	} else {
		// Deprecated in WordPress 6.5.
		dispatchCoreEditPost?.removeEditorPanel( 'post-excerpt' );
	}

	return settings;
};

// Add the ExcerptGenerator function to the plugins.registerPlugin filter.
// Priority is set to 1000 to ensure that the function runs as late as possible.
addFilter( 'plugins.registerPlugin', 'wp-parsely-excerpt-generator', ExcerptGenerator, 1000 );
