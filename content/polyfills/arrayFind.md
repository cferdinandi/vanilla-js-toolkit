---
title: "Array.find()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to at least IE6.

```js
/**
 * Array.prototype.find() polyfill
 * Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Array.prototype.find) {
	Array.prototype.find = function (callback) {
		// 1. Let O be ? ToObject(this value).
		if (this == null) {
			throw new TypeError('"this" is null or not defined');
		}

		var o = Object(this);

		// 2. Let len be ? ToLength(? Get(O, "length")).
		var len = o.length >>> 0;

		// 3. If IsCallable(callback) is false, throw a TypeError exception.
		if (typeof callback !== 'function') {
			throw new TypeError('callback must be a function');
		}

		// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
		var thisArg = arguments[1];

		// 5. Let k be 0.
		var k = 0;

		// 6. Repeat, while k < len
		while (k < len) {
			// a. Let Pk be ! ToString(k).
			// b. Let kValue be ? Get(O, Pk).
			// c. Let testResult be ToBoolean(? Call(callback, T, « kValue, k, O »)).
			// d. If testResult is true, return kValue.
			var kValue = o[k];
			if (callback.call(thisArg, kValue, k, o)) {
				return kValue;
			}
			// e. Increase k by 1.
			k++;
		}

		// 7. Return undefined.
		return undefined;
	}
}
```