---
title: "copy.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Create an identical clone of an array or object."
weight: 10
noIndex: false
---

Create an identical clone of an array or object. {{<learn-how href="https://gomakethings.com/how-to-handle-immutability-in-javascript/">}}

```js
/*!
 * Create an identical clone of an array or object
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array|Object} obj The array or object to copy
 * @return {Array|Object}     The clone of the array or object
 */
var copy = function (obj) {
	if (Object.prototype.toString.call(obj) === '[object Array]') {
		return obj.slice();
	}
	return JSON.parse(JSON.stringify(obj));
};
```