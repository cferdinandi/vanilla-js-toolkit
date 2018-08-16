---
title: "placeholders.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Replace placeholder variables with real content."
weight: 10
noIndex: false
---

Replace placeholder variables with real content. {{<learn-how url="https://gomakethings.com/a-vanilla-js-alternative-to-handlebarsjs-and-mustachejs/">}}

```js
/*!
 * Replaces placeholders with real content
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param {String} template The template string
 * @param {String} local    A local placeholder to use, if any
 */
var placeholders = function (template, data) {

	'use strict';

	// Check if the template is a string or a function
	template = typeof (template) === 'function' ? template() : template;
	if (['string', 'number'].indexOf(typeof template) === -1) throw 'PlaceholdersJS: please provide a valid template';

	// If no data, return template as-is
	if (!data) return template;

	// Replace our curly braces with data
	template = template.replace(/\{\{([^}]+)\}\}/g, function (match) {

		// Remove the wrapping curly braces
		match = match.slice(2, -2);

		// Check if the item has sub-properties
		var sub = match.split('.');

		// If the item has a sub-property, loop through until you get it
		if (sub.length > 1) {

			var temp = data;

			sub.forEach(function (item) {

				// Make sure the item exists
				if (!temp[item]) {
					temp = '{{' + match + '}}';
					return;
				}

				// Update temp
				temp = temp[item];
			});

			return temp;

		}

		// Otherwise, return the item
		else {
			if (!data.hasOwnProperty(match)) return '{{' + match + '}}';
			return data[match];
		}

	});

	return template;

};
```