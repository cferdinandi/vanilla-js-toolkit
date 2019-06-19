/*!
 * vanillajs v1.5.0
 * The theme for vanillajstoolkit.com
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/vanilla-js-toolkit
 */

var crowsNest = function () {

	'use strict';

	//
	// Variables
	//

	var form = document.querySelector('#form-search');
	var input = document.querySelector('#input-search');
	var resultList = document.querySelector('#search-results');


	//
	// Methods
	//

	/**
	 * Get the value of a query string from a URL
	 * @param  {String} key The query string key to get the value of
	 * @param  {String} url The URL to search
	 * @return {String}     The query string value
	 */
	var getQueryString = function (key, url) {
		var href = url ? url : window.location.href;
		var reg = new RegExp('[?&]' + key + '=([^&#]*)', 'i');
		var string = reg.exec(href);
		return string ? string[1] : null;
	};

	/**
	 * Create the HTML for each result
	 * @param  {Object} article The article
	 * @param  {Number} id      The result index
	 * @return {String}         The markup
	 */
	var createHTML = function (article, id) {
		var html =
			'<div class="margin-bottom" id="search-result-' + id + '">' +
				'<a class="link-block" href="' + article.url + '">' +
					'<aside class="text-muted text-small">' +
						'<time datetime="' + article.datetime + '" pubdate>' + article.date + '</time>' +
					'</aside>' +
					'<h2 class="h3 link-block-styled link-no-underline no-padding-top no-margin-bottom">' + article.title + '</h2>' +
					article.summary.slice(0, 150) + '...<br>' +
					'<span class="link-block-styled link-no-underline">' + article.url + '</span>' +
				'</a>' +
			'</div>';
		return html;
	};

	/**
	 * Create the markup when no results are found
	 * @return {String} The markup
	 */
	var createNoResultsHTML = function () {
		return '<p>Sorry, no matches were found.</p>';
	};

	/**
	 * Create the markup for results
	 * @param  {Array} results The results to display
	 * @return {String}        The results HTML
	 */
	var createResultsHTML = function (results) {
		var html = '<p>Found ' + results.length + ' matching articles</p>';
		html += results.map((function (article, index) {
			return createHTML(article.article, index);
		})).join('');
		return html;
	};

	/**
	 * Update the URL with a query string for the search string
	 * @param  {[type]} query [description]
	 * @return {[type]}       [description]
	 */
	var updateURL = function (query) {
		if (!history.pushState) return;
		history.pushState({}, document.title, window.location.origin + window.location.pathname + '?s=' + encodeURI(query));
	};

	/**
	 * Search for matches
	 * @param  {String} query The term to search for
	 */
	var search = function (query) {

		// var reg = new RegExp(query, 'gi');
		var regMap = query.split(' ').map((function (word) {
			return new RegExp(word, 'gi');
		}));
		console.log(regMap);

		// Get and sort the results
		var results = searchIndex.reduce((function (results, article, index) {

			// Setup priority count
			var priority = 0;

			// Assign priority
			regMap.forEach((function (reg) {
				if (reg.test(article.title)) { priority += 20; console.log(priority, article.title); }
				if (reg.test(article.content)) { priority += 1; }
			}));

			// If any matches, push to results
			if (priority > 0) {
				results.push({
					priority: priority,
					article: article
				});
			}

			return results;

		}), []).sort((function (article1, article2) {
			return article2.priority - article1.priority;
		}));

		console.log(results);

		// Display the results
		resultList.innerHTML = results.length < 1 ? createNoResultsHTML() : createResultsHTML(results);

		// Update the URL
		updateURL(query);

	};

	/**
	 * Handle submit events
	 */
	var submitHandler = function (event) {
		event.preventDefault();
		search(input.value);
	};

	var clearInput = function () {
		input.value = input.value.replace(' site:gomakethings.com', '');
	};

	/**
	 * If there's a query string search term, search it on page load
	 */
	var onload = function () {
		var query = getQueryString('s');
		if (!query) return;
		var decoded = decodeURI(query);
		input.value = decoded;
		search(decoded);
	};


	//
	// Inits & Event Listeners
	//

	// Make sure required content exists
	if (!form || !input || !resultList || !searchIndex) return;

	// Clear the input field
	clearInput();

	// Create a submit handler
	form.addEventListener('submit', submitHandler, false);

	// Check for query strings onload
	onload();

};

crowsNest();