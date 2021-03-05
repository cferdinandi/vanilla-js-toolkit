---
title: "groupBy.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Group items from an array together by some criteria or value."
how: "https://gomakethings.com/a-vanilla-js-equivalent-of-lodashs-groupby-method/"
demo: "https://codepen.io/cferdinandi/pen/KEYbeE"
weight: 10
noIndex: false
---

```js
/*!
 * Group items from an array together by some criteria or value.
 * (c) 2019 Tom Bremmer (https://tbremer.com/) and Chris Ferdinandi (https://gomakethings.com), MIT License,
 * @param  {Array}           arr      The array to group items from
 * @param  {String|Function} criteria The criteria to group by
 * @return {Object}                   The grouped object
 */
var groupBy = function (arr, criteria) {
	return arr.reduce(function (obj, item) {

		// Check if the criteria is a function to run on the item or a property of it
		var key = typeof criteria === 'function' ? criteria(item) : item[criteria];

		// If the key doesn't exist yet, create it
		if (!Object.prototype.hasOwnProperty.call(obj, key)) {
			obj[key] = [];
		}

		// Push the value to the object
		obj[key].push(item);

		// Return the object to the next item in the loop
		return obj;

	}, {});
};
```
