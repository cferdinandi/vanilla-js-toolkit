---
title: "String.endsWith()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to at least IE6.

```js
/**
 * String.prototype.endsWith() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#Polyfill
 */
if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(searchStr, Position) {
		// This works much better than >= because
		// it compensates for NaN:
		if (!(Position < this.length)) {
			Position = this.length;
		} else {
			Position |= 0; // round position
		}
		return this.substr(Position - searchStr.length, searchStr.length) === searchStr;
	};
}
```