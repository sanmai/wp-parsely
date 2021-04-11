<?php
/**
 * Recommended Widget tests.
 *
 * @package Parsely\Tests
 */

namespace Parsely\Tests;

use Parsely_Recommended_Widget;

/**
 * Recommended Widget tests.
 */
final class Recommended_API_Test extends TestCase {
	public function data_recommended_api_url() {
		return array(
			'Basic (Expected data)' => array(
				'my-key',
				7,
				'score',
				'-',
				5,
				'https://api.parsely.com/v2/related?apikey=my-key&sort=score&boost=-&limit=5&pub_date_start=7d',
			),
			'published_within value of 0' => array(
				'my-key',
				0,
				'score',
				'-',
				5,
				'https://api.parsely.com/v2/related?apikey=my-key&sort=score&boost=-&limit=5',
			),
		);
	}

	/**
	 * Test the basic generation of the API URL.
	 *
	 * @dataProvider data_recommended_api_url
	 */
	public function test_recommended_api_url( $api_key, $published_within, $sort, $boost, $return_limit, $url ) {
		$recommended_widget = new Parsely_Recommended_Widget();

		self::assertEquals( $url, $recommended_widget->get_api_url( $api_key, $published_within, $sort, $boost, $return_limit ) );
	}
}
