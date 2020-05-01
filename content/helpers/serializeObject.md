---
title: "serializeObject.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Serialize all form data into an object of key/value pairs."
demo: "https://codepen.io/cferdinandi/pen/wvKrXVw"
polyfills: "Works in all modern browsers, and back to IE10."
weight: 10
noIndex: false
---

```js
/*!
 * Serialize all form data into an object of key/value pairs
 * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {Object}      The serialized form data
 */
var serializeObject = function (form) {
	var obj = {};
	var formData = new FormData(form);
	for (var key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return obj;
};
```