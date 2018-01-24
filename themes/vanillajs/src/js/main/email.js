/**
 * Prepopulate email fields based on a query string
 */
;(function (window, document, undefined) {

	'use strict';

	// Feature Test
	var supports = 'querySelector' in document;
	if ( !supports ) return;

	/**
	 * Get the value of a query string from a URL
	 * @param  {String} field The field to get the value of
	 * @param  {String} url   The URL to get the value from [optional]
	 * @return {String}       The value
	 */
	var getQueryString = function ( field, url ) {
		var href = url ? url : window.location.href;
		var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
		var string = reg.exec(href);
		return string ? string[1] : null;
	};

	// Variables
	var email = getQueryString('email');
	var input = document.querySelector('input[type="email"]');
	if (!email || !input) return;

	// Autoload email
	input.value = email;

})(window, document);