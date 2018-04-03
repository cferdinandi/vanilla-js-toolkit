---
title: "isPlainObject.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Check if an item is a plain object ({}) or not."
weight: 10
noIndex: false
---

Check if an item is a plain object ({}) or not. {{<learn-how url="https://gomakethings.com/how-to-check-if-something-is-an-object-with-vanilla-javascript/">}}

```js
/*!
 * Check if an item is a plain object or not
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object}  obj  The item to check
 * @return {Boolean}      Returns true if the item is a plain object
 */
var isPlainObject = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
};
```