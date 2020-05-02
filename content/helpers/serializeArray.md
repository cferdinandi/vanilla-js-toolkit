---
title: "serializeArray.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Serialize all form data into an array of key/value pairs. Fields must have a `name` property."
demo: "https://codepen.io/cferdinandi/pen/VwvMdOG"
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
	Array.prototype.slice.call(form.elements).forEach(function (field) {
		if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1) return;
		if (field.type === 'select-multiple') {
			Array.prototype.slice.call(field.options).forEach(function (option) {
				if (!option.selected) return;
				arr.push({
					name: field.name,
					value: option.value
				});
			});
			return;
		}
		if (['checkbox', 'radio'].indexOf(field.type) >-1 && !field.checked) return;
		arr.push({
			name: field.name,
			value: field.value
		});
	});
	return arr;
};
```