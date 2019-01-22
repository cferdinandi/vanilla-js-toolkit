---
title: "get.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get an object value from a specific path."
how: "https://gomakethings.com/how-to-get-the-value-of-an-object-from-a-specific-path-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/ZmgGmz"
weight: 10
noIndex: false
---

```js
/*!
 * Get an object value from a specific path
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object}       obj  The object
 * @param  {String|Array} path The path
 * @param  {*}            def  A default value to return [optional]
 * @return {*}                 The value
 */
var get = function (obj, path, def) {

	/**
	 * If the path is a string, convert it to an array
	 * @param  {String|Array} path The path
	 * @return {Array}             The path array
	 */
	var stringToPath = function (path) {

		// If the path isn't a string, return it
		if (typeof path !== 'string') return path;

		// Create new array
		var output = [];

		// Split to an array with dot notation
		path.split('.').forEach(function (item) {

			// Split to an array with bracket notation
			item.split(/\[([^}]+)\]/g).forEach(function (key) {

				// Push to the new array
				if (key.length > 0) {
					output.push(key);
				}

			});

		});

		return output;

	};

	// Get the path as an array
	path = stringToPath(path);

	// Cache the current object
	var current = obj;

	// For each item in the path, dig into the object
	for (var i = 0; i < path.length; i++) {

		// If the item isn't found, return the default (or null)
		if (!current[path[i]]) return def;

		// Otherwise, update the current  value
		current = current[path[i]];

	}

	return current;

};
```
