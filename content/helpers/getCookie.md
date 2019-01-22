---
title: "getCookie.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get the value of a cookie."
demo: "https://codepen.io/cferdinandi/pen/exmYwG"
weight: 10
noIndex: false
---

```js
/**
 * Get the value of a cookie
 * Source: https://gist.github.com/wpsmith/6cf23551dd140fb72ae7
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
var getCookie = function (name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
};
```