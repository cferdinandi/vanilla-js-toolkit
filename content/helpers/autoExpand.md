---
title: "autoExpand.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Automatically expand a textarea as the user types."
weight: 10
noIndex: false
---

Automatically expand a textarea as the user types. I would recommend pairing with some light CSS (included below). {{<learn-how url="https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/">}}

**JavaScript**

```js
/*!
 * Automatically expand a textarea as the user types
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node} field The textarea
 */
var autoExpand = function (field) {

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	             + parseInt(computed.getPropertyValue('padding-top'), 10)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

	field.style.height = height + 'px';

};
```

**CSS**

```css
textarea {
	min-height: 5em;
	max-height: 50vh;
	width: 100%;
}
```