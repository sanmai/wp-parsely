/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { select } from '@wordpress/data';
// eslint-disable-next-line import/named
import { Post, Taxonomy, User } from '@wordpress/core-data';
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import {
	ContentHelperError,
	ContentHelperErrorCode,
} from './content-helper-error';
import { RelatedTopPostData } from './models/related-top-post-data';

/**
 * The form of the query that gets posted to the analytics/posts WordPress REST
 * API endpoint.
 */
interface RelatedTopPostsApiQuery {
	message: string; // Selected filter message to be displayed to the user.
	query: null | { // Query to be posted to the Parse.ly API.
		[ key: string ]: string | number | Taxonomy;
	};
}

/**
 * The form of the response returned by the /stats/posts WordPress REST API
 * endpoint.
 */
interface RelatedTopPostsApiResponse {
	error?: Error;
	data?: RelatedTopPostData[];
}

/**
 * The form of the result returned by the getRelatedTopPosts() function.
 */
interface GetRelatedTopPostsResult {
	message: string;
	posts: RelatedTopPostData[];
}

export const RELATED_POSTS_DEFAULT_LIMIT = 5;
export const RELATED_POSTS_DEFAULT_TIME_RANGE = 3; // In days.

class ContentHelperProvider {
	/**
	 * Returns related top-performing posts to the one that is currently being
	 * edited within the WordPress Block Editor.
	 *
	 * The 'related' status is determined by the current post's Author, Category
	 * or tag.
	 *
	 * @return {Promise<GetRelatedTopPostsResult>} Object containing message and posts.
	 */
	static async getRelatedTopPosts(): Promise<GetRelatedTopPostsResult> {
		const editor = select( 'core/editor' );

		// Get post's author.
		const currentPost: Post = editor.getCurrentPost();
		const author: User = select( 'core' ).getEntityRecord( 'root', 'user', currentPost.author );

		// Get post's first category.
		const categoryIds = editor.getEditedPostAttribute( 'categories' ) as Array<number>;
		const category: Taxonomy = select( 'core' ).getEntityRecord( 'taxonomy', 'category', categoryIds?.[ 0 ] );

		// Get post's first tag.
		const tagIds = editor.getEditedPostAttribute( 'tags' ) as Array<number>;
		const tag: Taxonomy = select( 'core' ).getEntityRecord( 'taxonomy', 'post_tag', tagIds?.[ 0 ] );

		// Create API query.
		let apiQuery;
		try {
			apiQuery = this.buildRelatedTopPostsApiQuery( author, category, tag );
		} catch ( contentHelperError ) {
			return Promise.reject( contentHelperError );
		}

		// Fetch results from API and set the Content Helper's message.
		let data;
		try {
			data = await this.fetchRelatedTopPostsFromWpEndpoint( apiQuery );
		} catch ( contentHelperError ) {
			return Promise.reject( contentHelperError );
		}

		/* translators: %s: message such as "in category Foo", %d: number of days */
		let message = sprintf( __( 'Top-performing posts %1$s in last %2$d days.', 'wp-parsely' ), apiQuery.message, RELATED_POSTS_DEFAULT_TIME_RANGE );
		if ( data.length === 0 ) {
			message = `${ __( 'The Parse.ly API did not return any results for top-performing posts', 'wp-parsely' ) } ${ apiQuery.message }.`;
		}

		return { message, posts: data };
	}

	/**
	 * Fetches the related top-performing posts data from the WordPress REST API.
	 *
	 * @param {RelatedTopPostsApiQuery} query
	 * @return {Promise<Array<RelatedTopPostData>>} Array of fetched posts.
	 */
	private static async fetchRelatedTopPostsFromWpEndpoint( query: RelatedTopPostsApiQuery ): Promise<RelatedTopPostData[]> {
		let response;

		try {
			response = await apiFetch( {
				path: addQueryArgs( '/wp-parsely/v1/stats/posts', query.query ),
			} ) as RelatedTopPostsApiResponse;
		} catch ( wpError ) {
			return Promise.reject( new ContentHelperError(
				wpError.message, wpError.code
			) );
		}

		if ( response?.error ) {
			return Promise.reject( new ContentHelperError(
				response.error.message,
				ContentHelperErrorCode.ParselyApiResponseContainsError
			) );
		}

		return response?.data || [];
	}

	/**
	 * Builds the query object used in the API for performing the related
	 * top-performing posts request.
	 *
	 * @param {User}     author   The post's author.
	 * @param {Taxonomy} category The post's category.
	 * @param {Taxonomy} tag      The post's tag.
	 * @return {RelatedTopPostsApiQuery} The query object.
	 */
	private static buildRelatedTopPostsApiQuery( author: User, category: Taxonomy, tag: Taxonomy ): RelatedTopPostsApiQuery {
		const limit = RELATED_POSTS_DEFAULT_LIMIT;

		// A tag exists.
		if ( tag?.slug ) {
			return ( {
				query: { limit, tag: tag.slug },
				/* translators: %s: message such as "with tag Foo" */
				message: sprintf( __( 'with tag "%1$s"', 'wp-parsely' ), tag.name ),
			} );
		}

		// A category exists.
		if ( category?.name ) {
			return ( {
				query: { limit, section: category.name },
				/* translators: %s: message such as "in category Foo" */
				message: sprintf( __( 'in category "%1$s"', 'wp-parsely' ), category.name ),
			} );
		}

		// Fallback to author.
		if ( author?.name ) {
			return ( {
				query: { limit, author: author.name },
				/* translators: %s: message such as "by author John" */
				message: sprintf( __( 'by author "%1$s"', 'wp-parsely' ), author.name ),
			} );
		}

		// No filter could be picked. The query cannot be formulated.
		throw new ContentHelperError(
			__( "Cannot formulate query because the post's Tag, Category and Author are empty.", 'wp-parsely' ),
			ContentHelperErrorCode.CannotFormulateApiQuery
		);
	}
}

export default ContentHelperProvider;
