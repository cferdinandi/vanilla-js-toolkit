---
title: "copy.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Create an immutable clone of an array or object."
how: "https://gomakethings.com/a-better-way-to-create-an-immutable-copy-of-an-object-or-array-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/arXrpJ"
weight: 10
noIndex: false
---

```js
/*!
 * Create an immutable clone of an array or object
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array|Object} obj The array or object to copy
 * @return {Array|Object}     The clone of the array or object
 */
var copy = function (obj) {

	//
	// Methods
	//

	/**
	 * Create an immutable copy of an object
	 * @return {Object}
	 */
	var cloneObj = function () {

		// Create new object
		var clone = {};

		// Loop through each item in the original
		// Recursively copy it's value and add to the clone
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				clone[key] = copy(obj[key]);
			}
		}

		return clone;


	};

	/**
	 * Create an immutable copy of an array
	 * @return {Array}
	 */
	var cloneArr = function () {
		return obj.map(function (item) {
			return copy(item);
		});
	};


	//
	// Inits
	//

	// Get object type
	var type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

	// If an object
	if (type === 'object') {
		return cloneObj();
	}

	// If an array
	if (type === 'array') {
		return cloneArr();
	}

	// Otherwise, return it as-is
	return obj;

};
```