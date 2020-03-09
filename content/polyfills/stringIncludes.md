---
title: "String.includes()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to IE6.

```js
/**
 * String.prototype.includes() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
 */
if (!String.prototype.includes) {
	String.prototype.includes = function(search, start) {
		'use strict';

		if (search instanceof RegExp) {
			throw TypeError('first argument must not be a RegExp');
		}
		if (start === undefined) { start = 0; }
		return this.indexOf(search, start) !== -1;
	};
}
```