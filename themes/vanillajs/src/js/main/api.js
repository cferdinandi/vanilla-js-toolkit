var api = function () {

	'use strict';

	//
	// Variables
	//

	var ctas = document.querySelectorAll('[data-cta]');
	var testimonials = document.querySelectorAll('[data-testimonial]');
	var prices = document.querySelectorAll('[data-price]');


	//
	// Methods
	//

	/**
	 * Sanitize the API data to prevent XSS attacks
	 * @return {String} The content
	 */
	var sanitize = function () {
		var temp = document.createElement('div');
		temp.textContent = str;
		return temp.innerHTML;
	};

	/**
	 * Render testimonial into the DOM
	 * @param  {Node} node   The node to render HTML into
	 * @param  {Object} data The testimonial data
	 */
	var renderTestimonial = function (node, data) {
		var noPhoto = node.getAttribute('data-no-photo');
		if (noPhoto) {
			node.innerHTML =
				'<blockquote>' +
					data.quote +
					(data.url ? '<cite>- <a href="' + data.url + '">' + data.name + '</a></cite>' : '<cite>- ' + data.name + '</cite>') +
				'</blockquote>';
		} else {
			node.innerHTML =
				'<div class="row">' +
					'<div class="grid-third">' +
						'<img class="aligncenter margin-bottom-small img-circle" height="150" width="150" src="https://gomakethings.com' + data.photo + '">' +
					'</div>' +
					'<div class="grid-two-thirds">' +
						'<blockquote>' +
							data.quote +
							(data.url ? '<cite>- <a href="' + data.url + '">' + data.name + '</a></cite>' : '<cite>- ' + data.name + '</cite>') +
						'</blockquote>' +
					'</div>' +
				'</div>';
		}
	};

	/**
	 * Render a call-to-action into the DOM
	 * @param  {Node}   node The node to render the HTML into
	 * @param  {Object} data The call-to-action data
	 */
	var renderCTA = function (node, data) {
		node.innerHTML = data;
	};

	/**
	 * Render sale pricing into the DOM
	 * @param  {Node}   node The node to render the HTML into
	 * @param  {Object} data The pricing data
	 * @param  {String} id   The ID of the price
	 */
	var renderPrice = function (node, data, id) {

		// Get the product type
		var product = node.getAttribute('data-product');
		if (!product) return;

		// Get the price
		// var priceID = id === 'guide-individual' && data['guides-all'] ? data['guides-all'][product] : data[id][product];
		var price = id === 'guide-individual' && data['guides-all'] ? data['guides-all'] : data[id];
		if (!price) return;
		if (!price[product] || price[product].length < 1) return;

		// Update the price
		node.innerHTML = price[product];

	};

	/**
	 * Render the API data into the DOM
	 * @param  {NodesList} nodes The elements to render data into
	 * @param  {Object}    data  The API data
	 * @param  {String}    type  The type of data to process
	 */
	var render = function (nodes, data, type) {
		for (var i = 0; i < nodes.length; i++) {

			// Get the content ID
			var id = nodes[i].getAttribute('data-' + type);
			if (!id || (type !== 'price' && !data[id])) continue;

			// Render data into the DOM
			if (type === 'price') {
				renderPrice(nodes[i], data, id);
			} else if (type === 'cta') {
				renderCTA(nodes[i], data[id]);
			} else {
				renderTestimonial(nodes[i], data[id]);
			}

		}
	};

	/**
	 * Process the API data
	 * @param  {Object} data The API data
	 */
	var process = function (data, store) {

		// Store to session storage
		if (store) {
			sessionStorage.setItem('gmt-api-data', data);
		}

		// Convert the stringified data to JSON
		var data = JSON.parse(data);

		// Render the data into the DOM
		render(ctas, data['ctas'], 'cta');
		render(testimonials, data['testimonials'], 'testimonial');
		render(prices, data['prices'], 'price');

	};

	/**
	 * Get data from the GMT API
	 * @param  {String} url The JSON file URL
	 */
	var getAPI = function (url) {

		// Check sessionStorage first
		var session = sessionStorage.getItem('gmt-api-data');
		if (session) {
			process(session);
			return;
		}

		// Set up our HTTP request
		var xhr = new XMLHttpRequest();

		// Setup our listener to process compeleted requests
		xhr.onreadystatechange = function () {

			// Only run if the request is complete
			if (xhr.readyState !== 4) return;

			// Process our return data
			if (xhr.status === 200) {
				process(xhr.responseText, true);
			}

		};

		// Create and send a GET request
		// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
		// The second argument is the endpoint URL
		xhr.open('GET', url);
		xhr.send();

	};


	//
	// Inits
	//

	if (ctas.length < 1 && testimonials.length < 1 && prices.length < 1) return;
	getAPI('https://gomakethings.com/api/data.json');

};