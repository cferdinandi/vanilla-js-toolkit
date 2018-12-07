---
title: "put.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Add items to an object at a specific path."
weight: 10
noIndex: false
---

Add items to an object at a specific path. {{<learn-how url="https://gomakethings.com/adding-items-to-an-object-at-a-specific-path-with-vanilla-js/">}}

```js
/*!
 * Add items to an object at a specific path
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object}       obj  The object
 * @param  {String|Array} path The path to assign the value to
 * @param  {*}            val  The value to assign
 */
var put = function (obj, path, val) {

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
		path.split('.').forEach(function (item, index) {

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

	// Convert the path to an array if not already
	path = stringToPath(path);

	// Cache the path length and current spot in the object
	var length = path.length;
	var current = obj;

	// Loop through the path
	path.forEach(function (key, index) {

		// Check if the assigned key shoul be an array
		var isArray = key.slice(-2) === '[]';

		// If so, get the true key name by removing the trailing []
		key = isArray ? key.slice(0, -2) : key;

		// If the key should be an array and isn't, create an array
		if (isArray && Object.prototype.toString.call(current[key]) !== '[object Array]') {
			current[key] = [];
		}

		// If this is the last item in the loop, assign the value
		if (index === length -1) {

			// If it's an array, push the value
			// Otherwise, assign it
			if (isArray) {
				current[key].push(val);
			} else {
				current[key] = val;
			}
		}

		// Otherwise, update the current place in the object
		else {

			// If the key doesn't exist, create it
			if (!current[key]) {
				current[key] = {};
			}

			// Update the current place in the object
			current = current[key];

		}

	});

};
```