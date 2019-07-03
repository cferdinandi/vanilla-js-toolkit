---
title: "isTenBased.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Check if a number ten-based (10, 100, 1000, etc.)."
how: "https://gomakethings.com/how-to-test-if-a-number-is-a-multiple-of-ten-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/wLXyRB"
weight: 10
noIndex: false
---

```js
/*!
 * Check if a number ten-based (10, 100, 1000, etc.)
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Integer}  num The number
 * @return {Boolean}      If true, the number is ten-based
 */
var isTenBased = function (num) {
	var str = num.toString();
	var first = str.slice(0, 1);
	var rest = str.slice(1, str.length);
	return first === '1' & parseFloat(rest) === 0;
};
```