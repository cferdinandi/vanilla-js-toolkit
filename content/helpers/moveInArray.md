---
title: "moveInArray.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Move an item from one index to another in an array."
how: "https://gomakethings.com/how-to-reorder-an-item-in-an-array-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/ExPdXVB"
weight: 10
noIndex: false
---

```js
/*!
 * Move an item from one index to another in an array.
 * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array}   arr  The array to move the item in
 * @param  {Integer} from The starting index of the item
 * @param  {Integer} to   The new index for the item
 */
var moveInArray = function (arr, from, to) {

	// Make sure a valid array is provided
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		throw new Error('Please provide a valid array');
	}

	// Delete the item from it's current position
	var item = arr.splice(from, 1);

	// Make sure there's an item to move
	if (!item.length) {
		throw new Error('There is no item in the array at index ' + from);
	}

	// Move the item to its new position
	arr.splice(to, 0, item[0]);

};
```