---
title: "serialize.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Serialize all form data into a query string. Fields must have a `name` property."
demo: "https://codepen.io/cferdinandi/pen/dyYVKLK"
polyfills: "Works in all modern browsers, and back to IE10."
weight: 10
noIndex: false
---

```js
/*!
 * Serialize all form data into a SearchParams string
 * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 */
var serialize = function (form) {
	var arr = [];
	var formData = new FormData(form);
	for (var key of formData.keys()) {
		arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(formData.get(key)));
	}
	return arr.join('&');
};
```