---
title: "roundDown.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Round down to the nearest whole number."
how: "https://gomakethings.com/how-to-round-to-the-nearest-number-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/wLmyKB"
weight: 10
noIndex: false
---

```js
/*!
 * Round down to the nearest whole number
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Number|String} num       The numer to round
 * @param  {Number}        precision The whole number to round to (ex. 10, 100, 1000)
 * @return {String}                  The rounded, delimited number
 */
var roundDown = function (num, precision) {
	num = parseFloat(num);
	if (!precision) return num.toLocaleString();
	return (Math.floor(num / precision) * precision).toLocaleString();
};
```