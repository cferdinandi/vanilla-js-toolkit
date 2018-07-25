---
title: "trueTypeOf.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "More accurately check the type of a JavaScript object."
weight: 10
noIndex: false
---

More accurately check the type of a JavaScript object. {{<learn-how url="https://gomakethings.com/true-type-checking-with-vanilla-js/">}}

```js
/*!
 * More accurately check the type of a JavaScript object
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} obj The object
 * @return {String}     The object type
 */
var trueTypeOf = function (obj) {
	return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
```