---
title: "dedupe.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Remove duplicate items from an array."
how: "https://gomakethings.com/removing-duplicates-from-an-array-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/GzRbWP"
weight: 10
noIndex: false
---

```js
/*!
 * Remove duplicate items from an array
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array} arr The array
 * @return {Array}     A new array with duplicates removed
 */
var dedupe = function (arr) {
	return arr.filter(function (item, index) {
		return arr.indexOf(item) === index;
	});
};
```