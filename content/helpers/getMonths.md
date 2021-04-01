---
title: "getMonths.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get a formatted list of months."
how: "https://gomakethings.com/getting-formatted-months-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/mddyEqm"
weight: 10
noIndex: false
---

```js
/*!
 * Convert a timestamp into a date
 * (c) 2021 Andrew Borstein (https://andrewborstein.com/) & Chris Ferdinandi (https://gomakethings.com)
 * MIT License,
 * @param  {Integer} month The month integer (1 is January)
 * @param  {Boolean}       If true, use short month names (ex. "Jan")
 * @return {Array|String}  The month, or an array of months
 */
function getMonths (month, short) {

	// Create month names
	let format = short ? 'short' : 'long';
	let monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (mon) {
		return new Date(2000, mon).toLocaleString({}, {month: format});
	});

	// Return month name (or all of them)
	if (month) {
		return monthNames[(month - 1)];
	}
	return monthNames;

}
```