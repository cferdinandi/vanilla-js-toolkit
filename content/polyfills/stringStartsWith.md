---
title: "String.startsWith()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to at least IE6.

```js
/**
 * String.prototype.startsWith() polyfill
 */
if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(search, pos){
		return this.slice(pos || 0, search.length) === search;
	};
}
```