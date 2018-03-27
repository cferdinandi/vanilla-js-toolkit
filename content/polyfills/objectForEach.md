---
title: "Object.forEach()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

This isn't a "real" polyfill, because it's not based on a spec for a real feature. The lack of an `Object.forEach()` method felt like a big miss to me, so I wrote a "polyfill" that works just like `Array.forEach()` and `NodeList.forEach()`.

Adds support to all modern browsers, and IE9 and above.

```js
/**
 * Object.prototype.forEach() polyfill
 * https://gomakethings.com/looping-through-objects-with-es6/
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Object.prototype.forEach) {
	Object.defineProperty(Object.prototype, 'forEach', {
		value: function (callback, thisArg) {
			if (this == null) {
				throw new TypeError('Not an object');
			}
			thisArg = thisArg || window;
			for (var key in this) {
				if (this.hasOwnProperty(key)) {
					callback.call(thisArg, this[key], key, this);
				}
			}
		}
	});
}
```