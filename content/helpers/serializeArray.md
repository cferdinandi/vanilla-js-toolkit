---
title: "serializeArray.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Serialize all form data into an array of key/value pairs. Fields must have a `name` property."
demo: "https://codepen.io/cferdinandi/pen/VwvMdOG"
polyfills: "Works in all modern browsers, and back to IE10."
weight: 10
noIndex: false
---

```js
/*!
 * Serialize all form data into an array of key/value pairs
 * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {Array}       The serialized form data
 */
var serializeArray = function (form) {
	var arr = [];
	var formData = new FormData(form);
	for (var key of formData.keys()) {
		arr.push({
			name: key,
			value: formData.get(key)
		});
	}
	return arr;
};
```