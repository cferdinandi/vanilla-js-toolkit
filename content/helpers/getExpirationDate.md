---
title: "getExpirationDate.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Create an expiration date timestamp for use with cookies."
weight: 10
noIndex: false
---

Create an expiration date timestamp for use with cookies. Pass in an expiration time in milliseconds.

```js
/*!
 * Create an expiration date timestamp for use with cookies.
 * @param  {Number} time  The amount of time in the future to set the expiration date for
 * @return {String}       The expiration date
 */
 var getExpirationDate = function (time) {
 	return new Date(+new Date() + time).toUTCString();
 };
```