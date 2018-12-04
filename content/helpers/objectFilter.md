---
title: "objectFilter.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Create a new object composed of properties that meet specific criteria."
weight: 10
noIndex: false
---

Create a new object composed of properties that meet specific criteria. {{<learn-how href="https://codepen.io/cferdinandi/pen/mQYbKG?editors=0001">}}

```js
/*!
 * Create a new object composed of properties that meet specific criteria
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object}   obj      The original object
 * @param  {Function} callback The callback test to run
 * @return {Object}            The new, filtered object
 */
var objectFilter = function (obj, callback) {

	'use strict';

	// Setup a new object
	var filtered = {};

	// Loop through each item in the object and test it
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {

			// If the callback validates true, push item to the new object
			if (callback(obj[key], key, obj)) {
				filtered[key] = obj[key];
			}

		}
	}

	// Return the new object
	return filtered;

};
```
