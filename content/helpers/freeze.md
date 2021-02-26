---
title: "freeze.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Freeze a multi-dimensional array or object."
how: "https://gomakethings.com/making-objects-and-arrays-immutable-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/rNWJpmm"
weight: 10
noIndex: false
---

```js
/*!
 * Freeze a multi-dimensional array or object
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array|Object} obj The array or object to freeze
 * @return {Array|Object}     The frozen array or object
 */
function freeze (obj) {

	// Get object type
	let type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

	/**
	 * Check if the item is an array or object
	 * @param  {Array|Object}  item The item to check
	 * @return {Boolean}            If true, item is an array or object
	 */
	function isArrOrObj (item) {
		return ['array', 'object'].includes(Object.prototype.toString.call(item).slice(8, -1).toLowerCase());
	}

	// If an object, recursively freeze
	if (type === 'object') {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (isArrOrObj(obj[key])) {
					freeze(obj[key]);
				}
			}
		}
	}

	// If an array, recursively freeze
	if (type === 'array') {
		for (let item of obj) {
			if (isArrOrObj(item)) {
				freeze(item);
			}
		}
	}

	// Freeze and return the object
	return Object.freeze(obj);

}
```