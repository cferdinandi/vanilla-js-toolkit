---
title: "arrayIntersect.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get the intersecting values between two arrays."
how: "https://gomakethings.com/how-to-find-the-intersecting-values-of-two-arrays-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/xxjmRwK?editors=0011"
weight: 10
noIndex: false
---

```js
/*!
 * Get the intersecting values between two arrays
 * (c) 2022 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array} arr1 The first array
 * @param  {Array} arr2 The second array
 * @return {Array}      The array of overlapping values
 */
function arrayIntersect (arr1, arr2) {
	return arr1.filter(function (item) {
		return arr2.includes(item);
	});
}
```
