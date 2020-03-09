---
title: "Array.includes()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to IE9.

```js
/**
 * Array.prototype.includes() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Array.prototype.includes) {
	Array.prototype.includes = function(search, start) {
		'use strict';
		if (search instanceof RegExp) {
			throw TypeError('first argument must not be a RegExp');
		}
		if (start === undefined) { start = 0; }
		return this.indexOf(search, start) !== -1;
	};
}
```