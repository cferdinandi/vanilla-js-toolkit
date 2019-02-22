---
title: "arraysMatch.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Check if two arrays are equal."
how: "https://gomakethings.com/how-to-check-if-two-arrays-are-equal-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/exwjoZ"
weight: 10
noIndex: false
---

```js
/*!
 * Check if two arrays are equal
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array}   arr1 The first array
 * @param  {Array}   arr2 The second array
 * @return {Boolean}      If true, both arrays are equal
 */
var arraysMatch = function (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};
```