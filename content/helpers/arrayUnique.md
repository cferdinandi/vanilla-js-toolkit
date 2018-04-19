---
title: "arrayUnique.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Remove duplicates from an array."
weight: 10
noIndex: false
---

Remove duplicates from an array. {{<learn-how url="https://gomakethings.com/removing-duplicates-from-an-array-with-vanilla-javascript/">}}

```js
/*!
 * Remove duplicates from an array.
 * Adapted from https://stackoverflow.com/a/23263937
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array} arr The array
 * @return {Array}     A new array without duplicates
 */
var arrayUnique = function (arr) {
	return arr.filter(function(item, index){
		return arr.indexOf(item) >= index;
	});
};
```