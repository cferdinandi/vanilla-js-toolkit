---
title: "toTitleCase.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Convert a string to title case."
how: "https://gomakethings.com/converting-a-string-to-title-case-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/aXzNbe"
weight: 10
noIndex: false
---

```js
/*!
 * Convert a string to title case
 * source: https://gist.github.com/SonyaMoisset/aa79f51d78b39639430661c03d9b1058#file-title-case-a-sentence-for-loop-wc-js
 * @param  {String} str The string to convert to title case
 * @return {String}     The converted string
 */
var toTitleCase = function (str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};
```