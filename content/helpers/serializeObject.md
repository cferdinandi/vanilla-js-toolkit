---
title: "serializeObject.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Serialize all form data into an object of key/value pairs. Fields must have a `name` property."
demo: "https://codepen.io/cferdinandi/pen/wvKrXVw"
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
	Array.prototype.slice.call(form.elements).forEach(function (field) {
		if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1) return;
		if (field.type === 'select-multiple') {
			var options = [];
			Array.prototype.slice.call(field.options).forEach(function (option) {
				if (!option.selected) return;
				options.push(option.value);
			});
			if (options.length) {
				obj[field.name] = options;
			}
			return;
		}
		if (['checkbox', 'radio'].indexOf(field.type) >-1 && !field.checked) return;
		obj[field.name] = field.value;
	});
	return obj;
};
```