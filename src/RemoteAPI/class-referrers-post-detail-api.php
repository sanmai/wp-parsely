<?php
/**
 * Class for Referrers Post Detail API (`/referrers/post/detail`).
 *
 * @package Parsely
 * @since   3.6.0
 */

declare(strict_types=1);

namespace Parsely\RemoteAPI;

use Parsely\Parsely;

/**
 * Class for Referrers Post Detail API (`/referrers/post/detail`).
 *
 * @since 3.6.0
 */
class Referrers_Post_Detail_API extends Remote_API_Base {
	protected const ENDPOINT     = Parsely::PUBLIC_API_BASE_URL . '/referrers/post/detail';
	protected const QUERY_FILTER = 'wp_parsely_referrers_post_detail_endpoint_args';
}
