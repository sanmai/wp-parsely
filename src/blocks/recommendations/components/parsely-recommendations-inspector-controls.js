/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

const ParselyRecommendationsInspectorControls = ( {
	attributes: { boost, imagestyle, limit, showimages, sort, tag, title },
	setAttributes,
} ) => {
	return (
		<InspectorControls>
			<PanelBody title="Settings" initialOpen={ true }>
				<PanelRow>
					<TextControl
						label={ __( 'Title', 'wp-parsely' ) }
						value={ title }
						onChange={ ( newval ) => setAttributes( { title: newval } ) }
					/>
				</PanelRow>
				<PanelRow>
					<RangeControl
						label={ __( 'Maximum Results', 'wp-parsely' ) }
						min="1"
						max="99"
						onChange={ ( newval ) => setAttributes( { limit: newval } ) }
						value={ limit }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show Images', 'wp-parsely' ) }
						help={
							showimages
								? __( 'Showing images', 'wp-parsely' )
								: __( 'Not showing images', 'wp-parsely' )
						}
						checked={ showimages }
						onChange={ () => setAttributes( { showimages: ! showimages } ) }
					/>
				</PanelRow>
				{ showimages && (
					<PanelRow>
						<RadioControl
							label={ __( 'Image style', 'wp-parsely' ) }
							selected={ imagestyle }
							options={ [
								{ label: __( 'Original image', 'wp-parsely' ), value: 'original' },
								{ label: __( 'Thumbnail from Parse.ly', 'wp-parsely' ), value: 'thumbnail' },
							] }
							onChange={ ( newval ) =>
								setAttributes( {
									imagestyle: newval === 'original' ? 'original' : 'thumbnail',
								} )
							}
						/>
					</PanelRow>
				) }
				<PanelRow>
					<TextControl
						label={ __( 'Tag', 'wp-parsely' ) }
						value={ tag }
						onChange={ ( newval ) => setAttributes( { tag: newval } ) }
					/>
				</PanelRow>
				<PanelRow>
					<SelectControl
						label={ __( 'Sort Recommendations', 'wp-parsely' ) }
						value={ sort }
						options={ [
							{ label: 'Score', value: 'score' },
							{
								label: __( 'Publication Date', 'wp-parsely' ),
								value: 'pub_date',
							},
						] }
						onChange={ ( newval ) => setAttributes( { sort: newval } ) }
					/>
				</PanelRow>
				<PanelRow>
					<SelectControl
						label={ __( 'Boost', 'wp-parsely' ) }
						value={ boost }
						options={ [
							{
								label: __( 'Views', 'wp-parsely' ),
								value: 'views',
							},
							{
								label: __( 'Mobile Views', 'wp-parsely' ),
								value: 'mobile_views',
							},
							{
								label: __( 'Tablet Views', 'wp-parsely' ),
								value: 'tablet_views',
							},
							{
								label: __( 'Desktop Views', 'wp-parsely' ),
								value: 'desktop_views',
							},
							{
								label: __( 'Visitors', 'wp-parsely' ),
								value: 'visitors',
							},
							{
								label: __( 'Visitors New', 'wp-parsely' ),
								value: 'visitors_new',
							},
							{
								label: __( 'Visitors Returning', 'wp-parsely' ),
								value: 'visitors_returning',
							},
							{
								label: __( 'Engaged Minutes', 'wp-parsely' ),
								value: 'engaged_minutes',
							},
							{
								label: __( 'Average Engaged', 'wp-parsely' ),
								value: 'avg_engaged',
							},
							{
								label: __( 'Average Engaged New', 'wp-parsely' ),
								value: 'avg_engaged_new',
							},
							{
								label: __( 'Average Engaged Returning', 'wp-parsely' ),
								value: 'avg_engaged_returning',
							},
							{
								label: __( 'Social Interactions', 'wp-parsely' ),
								value: 'social_interactions',
							},
							{
								label: __( 'Facebook Interactions', 'wp-parsely' ),
								value: 'fb_interactions',
							},
							{
								label: __( 'Twitter Interactions', 'wp-parsely' ),
								value: 'tw_interactions',
							},
							{
								label: __( 'Pinterest Interactions', 'wp-parsely' ),
								value: 'pi_interactions',
							},
							{
								label: __( 'Social Referrals', 'wp-parsely' ),
								value: 'social_referrals',
							},
							{
								label: __( 'Facebook Referrals', 'wp-parsely' ),
								value: 'fb_referrals',
							},
							{
								label: __( 'Twitter Referrals', 'wp-parsely' ),
								value: 'tw_referrals',
							},
							{
								label: __( 'LinkedIn Referrals', 'wp-parsely' ),
								value: 'li_referrals',
							},
							{
								label: __( 'Pinterest Referrals', 'wp-parsely' ),
								value: 'pi_referrals',
							},
						] }
						onChange={ ( newval ) => setAttributes( { boost: newval } ) }
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};

export default ParselyRecommendationsInspectorControls;
