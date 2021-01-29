---
title: "Object.fromEntries()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
aliases: ["/polyfills/objectentriesfrom/"]
---

Adds support to all modern browsers that support the `for...of` loop.

```js
/**
 * Object.entriesFrom() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Object.fromEntries) {
	Object.fromEntries = function (entries){
		if (!entries || !entries[Symbol.iterator]) { throw new Error('Object.fromEntries() requires a single iterable argument'); }
		let obj = {};
		for (let [key, value] of entries) {
			obj[key] = value;
		}
		return obj;
	};
}
```