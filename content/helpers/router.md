---
title: "router.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Route URLs in your single page web app."
weight: 20
noIndex: false
---

Route URLs in your single page web app. {{<learn-more title="Web Apps" url="web-apps">}}

```js
/*!
 * Setup URL router
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} routes  The URL paths
 * @param  {Object} options Custom options
 * @return {Object}         The routes
 */
var router = function (routes, options) {

	// Defaults
	var settings = {
		selector: '[data-route]',
		ignore: '[data-route-ignore]',
		key: 'p', // The query string key to use
		title: '',
		onpopstate: true,
		forceReload: !(history.pushState),
		type: 'query' // valid: query|path
	};

	// Shallow merge new properties into settings object
	for (var key in options) {
		if (options.hasOwnProperty(key)) {
			settings[key] = options[key];
		}
	}

	/**
	 * Get the URL parameters
	 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
	 * @param  {String} url The URL
	 * @return {Object}     The URL parameters
	 */
	var getParams = function (url) {
		var params = {};
		var parser = document.createElement('a');
		parser.href = url;
		var query = parser.search.substring(1);
		var vars = query.split('&');
		for (var i=0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			params[pair[0]] = decodeURIComponent(pair[1]);
		}
		return params;
	};

	/**
	 * Parse a URL pathname for variables
	 * @param  {String} pattern The pattern to match
	 * @param  {String} url     The pathname to parse
	 * @return {Object}         Details from the pathname
	 */
	var parsePathname = function (pattern, url) {

		// Variables
		var map = {};
		var keys = [];
		var matches = false;

		// If the URL is an exact match for the pattern, return it
		if (url === pattern || url + '/' === pattern) {
			return {
				id: pattern,
				params: {},
				url: url
			};
		}

		// Add a trailing slash to the URL if one is missing
		url = url.slice(-1) === '/' ? url : url + '/';

		// Push variables in the pattern to our key array and replace them with regex match grouping
		var newPattern = pattern.replace('(*)', '.+?').replace(/\(:.+?\)/g, function(match) {
			var key = match.slice(2, -1);
			keys.push(key);
			return '([^/]*)';
		});

		// Test the URL against the pattern.
		// If it's a match, pull the variables out into the map
		var test = url.replace(new RegExp('^' + newPattern + '/$'), function() {
			matches = true;
			for (var i = 0; i < keys.length; i++) {
				map[keys[i]] = arguments[i+1];
			}
		});

		// Return the data
		return {
			id: (matches ? pattern : null),
			params: map,
			url: url
		};
	};

	/**
	 * Get the route state from query strings
	 * @param  {String} url The URL
	 * @return {Object}     The route state
	 */
	var getRouteFromQuery = function (url) {

		// Get the query string parameters and the page id
		var params = getParams(url);
		var id = params[settings.key] ? params[settings.key].toLowerCase() : '';

		// If route has redirect, call setRoute with redirect URL
		if (routes[id] && routes[id].redirect) {
			routes.setRoute(routes[id].redirect);
			return;
		}

		return {
			id: routes[id] ? id : 404,
			params: params,
			url: url
		};
	};

	/**
	 * Get a route state from a pathname
	 * @param  {String} url The URL
	 * @return {Object}     The route state
	 */
	var getRouteFromPath = function (url) {

		// Make URL case-insensitive
		url = url.toLowerCase();

		// Loop through each route and test against URL
		for (var route in routes) {
			if (routes.hasOwnProperty(route)) {
				var parsed = parsePathname(route, url);
				if (parsed.id) {
					return parsed;
				}
			}
		}

		// Otherwise return 404
		return {
			id: 404,
			params: {},
			url: url
		};

	};

	/**
	 * Setup the route properties
	 */
	Object.defineProperties(routes, {
		state: {
			value: {
				id: '',
				params: {},
				url: null
			}
		},
		setRoute: {
			value: function (url) {

				// Bail if there's no URL
				if (!url) return;

				// Get the route state
				var state;
				if (settings.type === 'path') {
					state = getRouteFromPath(url);
					if (!state) return;
					routes.state.id = state.id;
					routes.state.params = state.params;
					routes.state.url = state.url;
				} else {
					state = getRouteFromQuery(url);
					if (!state) return;
					routes.state.id = state.id;
					routes.state.params = state.params;
					routes.state.url = state.url;
				}

				return routes.state;
			}
		},
		push: {
			value: function () {
				if (settings.forceReload) {
					if (window.location.href === routes.state.url) return;
					window.location.href = routes.state.url;
				}

				if (!history.pushState) return;

				// Update the page title
				document.title = (routes[routes.state.id] && routes[routes.state.id].title ? routes[routes.state.id].title : '') + settings.title;

				// Don't run if already current page
				if (history.state && history.state.url && history.state.url === routes.state.url) return;
				history.pushState(
					routes.state,
					(routes[routes.state.id] && routes[routes.state.id].title ? routes[routes.state.id].title : '') + settings.title,
					routes.state.url
				);
			}
		},
		replace: {
			value: function () {
				if (!history.replaceState) return;

				// Update the page title
				document.title = (routes[routes.state.id] && routes[routes.state.id].title ? routes[routes.state.id].title : '') + settings.title;

				// Don't run if already current page
				if (history.state && history.state.url && history.state.url === routes.state.url) return;
				history.pushState(
					routes.state,
					(routes[routes.state.id].title ? routes[routes.state.id].title : '') + settings.title,
					routes.state.url
				);
			}
		},
		route: {
			value: function (url) {
				if (!url) return;
				routes.setRoute(url);
				routes.push();
				var event = new CustomEvent('route', {
					bubbles: true,
					detail: {
						state: routes.state
					}
				});
				document.dispatchEvent(event);
				return routes.state;
			}
		}
	});

	/**
	 * Add event listeners
	 */

	// Listen for router link clicks
	window.addEventListener('click', function (event) {
		if (!event.target.matches(settings.selector) || event.target.matches(settings.ignore)) return;
		event.preventDefault();
		routes.route(event.target.href);
	}, false);

	// Listen for popstate events
	if (settings.onpopstate) {
		window.addEventListener('popstate', function (event) {
			if (!history.state.url) return;
			routes.route(history.state.url);
		}, false);
	}

	return routes;

};
```