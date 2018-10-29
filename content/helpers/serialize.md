---
title: "serialize.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Serialize all form data into a query string."
weight: 10
noIndex: false
---

Serialize all form data into a query string.

```js
/*!
 * Serialize all form data into a query string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    form  The form to serialize
 * @param  {Boolean} arr   If true, return an array instead of a string
 * @return {String|Array}  The serialized form data
 */
var serialize = function (form, arr) {

	// Setup our serialized data
	var serialized = [];

	// Loop through each field in the form
	for (var i = 0; i < form.elements.length; i++) {

		var field = form.elements[i];

		// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
		if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

		// Convert field data to a query string
		if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
			if (arr) {
				var obj = {};
				obj[field.nam] = field.value;
				serialized.push(obj);
			} else {
				serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
			}
		}
	}

	return arr ? serialized : serialized.join('&');

};
```