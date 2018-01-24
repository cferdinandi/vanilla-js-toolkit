---
title: "Array.forEach()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

```js
/**
 * Array.prototype.forEach() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (window.Array && !Array.prototype.forEach) {
	Array.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}
```