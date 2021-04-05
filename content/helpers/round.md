---
title: "round.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Round to the nearest whole number."
how: "https://gomakethings.com/refactoring-vanilla-js-code-to-be-more-dry/"
demo: "https://codepen.io/cferdinandi/pen/EBRZEr"
weight: 10
noIndex: false
---

```js
/*!
 * Round to the nearest whole number
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Number|String} num       The numer to round
 * @param  {Number}        precision The whole number to round to (ex. 10, 100, 1000)
 * @param  {String}        method    The rounding method (up, down, or auto - defaults to auto) [optional]
 * @return {String}                  The rounded, delimited number
 */
function round (num, precision, method = 'auto') {

	// Convert string numbers to a float
	num = parseFloat(num);

	// If there's no rounding precision, return the number
	if (!precision) return num.toLocaleString();

	// Possible methods and their values
	var methods = {
		auto: 'round',
		up: 'ceil',
		down: 'floor'
	};

	// Get the method function
	var fn = methods[method];
	if (!fn) throw `${method} is not a valid rounding method`;

	// Do math!
	return (Math[fn](num / precision) * precision).toLocaleString();

}
```