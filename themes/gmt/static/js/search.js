/*! vanillajs v1.5.0 | (c) 2023 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/vanilla-js-toolkit */
(function () {
	'use strict';

	function crowsNest (template) {

		//
		// Variables
		//

		let form = document.querySelector('#form-search');
		let input = document.querySelector('#input-search');
		let resultList = document.querySelector('#search-results');
		let searchStatus = document.querySelector('#search-status');
		let stopWords = ['a', 'an', 'and', 'are', 'aren\'t', 'as', 'by', 'can', 'cannot', 'can\'t', 'could', 'couldn\'t', 'how', 'is', 'isn\'t', 'it', 'its', 'it\'s', 'that', 'the', 'their', 'there', 'they', 'they\'re', 'them', 'to', 'too', 'us', 'very', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whenever', 'where', 'with', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the', 'vanilla', 'javascript', 'js'];


		//
		// Methods
		//

		/**
		 * Get the value of a query string from a URL
		 * @param  {String} key The query string key to get the value of
		 * @return {String}     The query string value
		 */
		function getQueryString (key) {
			return new URLSearchParams(window.location.search).get(key);
		}

		/**
		 * Create the markup for results
		 * @param  {Array}  results The results to display
		 * @return {String}         The results HTML
		 */
		function createResultsHTML (results) {
			return results.map(function (article, index) {
				return template(article.article, index);
			}).join('');
		}

		/**
		 * Update the URL with a query string for the search string
		 * @param  {[type]} query [description]
		 * @return {[type]}       [description]
		 */
		function updateURL (query) {
			if (!history.pushState) return;
			history.pushState({}, document.title, window.location.origin + window.location.pathname + '?s=' + encodeURI(query));
		}

		/**
		 * Show the search results in the UI
		 * @param  {Array}  results The results to display
		 */
		function showResults (results) {
			if (results.length) {
				searchStatus.innerHTML = `<p>Found ${results.length} matching articles</p>`;
				resultList.innerHTML = createResultsHTML(results);
			} else {
				searchStatus.innerHTML = '<p>Sorry, no matches were found.</p>';
				resultList.innerHTML = '';
			}
		}

		/**
		 * Search for matches
		 * @param  {String} query The term to search for
		 */
		function search (query) {

			// Create a regex for each query
			let regMap = query.toLowerCase().split(' ').filter(function (word) {
				return word.length && !stopWords.includes(word);
			}).map(function (word) {
				return new RegExp(word, 'i');
			});

			// Get and sort the results
			let results = searchIndex.reduce(function (results, article, index) {

				// Setup priority count
				let priority = 0;

				// Assign priority
				for (let reg of regMap) {
					if (reg.test(article.title)) { priority += 100; }
					let occurences = article.content.match(reg);
					// console.log(occurences);
					if (occurences) { priority += occurences.length; }
				}

				// If any matches, push to results
				if (priority > 0) {
					results.push({
						priority: priority,
						article: article
					});
				}

				return results;

			}, []).sort(function (article1, article2) {
				return article2.priority - article1.priority;
			});

			// Display the results
			showResults(results);

			// Update the URL
			updateURL(query);

		}

		/**
		 * Handle submit events
		 */
		function submitHandler (event) {
			event.preventDefault();
			search(input.value);
		}

		/**
		 * If there's a query string search term, search it on page load
		 */
		function onload () {
			let query = getQueryString('s');
			if (!query) return;
			let decoded = decodeURI(query);
			input.value = decoded;
			search(decoded);
		}


		//
		// Inits & Event Listeners
		//

		// Make sure required content exists
		if (!template || typeof template !== 'function' || !form || !input || !resultList || !searchStatus || !searchIndex) return;

		// Create a submit handler
		form.addEventListener('submit', submitHandler);

		// Check for query strings onload
		onload();

	}

	crowsNest(function (article, id) {
		if (!article.title || article.url.includes('/offline/')) return '';
		return `
		<li class="margin-bottom-medium">
			<div class="text-capitalize text-muted text-small">${article.type.replace('page', 'reference')}</div>
			<div><strong><a class="link-no-underline" href="${article.url}">${article.title}</a></strong></div>
		</li>`;
	});

}());
