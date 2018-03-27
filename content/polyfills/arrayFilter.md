---
title: "Array.filter()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to at least IE6.

```js
/**
 * Array.filter() polyfill
 */
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
if (!Array.prototype.filter)
  Array.prototype.filter = function(func, thisArg) {
	'use strict';
	if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
		throw new TypeError();

	var len = this.length >>> 0,
		res = new Array(len), // preallocate array
		t = this, c = 0, i = -1;
	if (thisArg === undefined)
	  while (++i !== len)
		// checks to see if the key was set
		if (i in this)
		  if (func(t[i], i, t))
			res[c++] = t[i];
	else
	  while (++i !== len)
		// checks to see if the key was set
		if (i in this)
		  if (func.call(thisArg, t[i], i, t))
			res[c++] = t[i];

	res.length = c; // shrink down array to proper size
	return res;
  };
```