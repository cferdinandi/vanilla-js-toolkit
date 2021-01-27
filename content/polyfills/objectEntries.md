---
title: "Object.entries()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to at least IE6.

```js
/**
 * Object.entries() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 */
if (!Object.entries) {
	Object.entries = function (obj){
		var ownProps = Object.keys(obj),
			i = ownProps.length,
			resArray = new Array(i); // preallocate the Array

		while (i--)
			resArray[i] = [ownProps[i], obj[ownProps[i]]];

		return resArray;

	};
}
```