---
title: "autoExpand.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Automatically expand a textarea as the user types."
how: "https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/ZwENVY"
weight: 10
noIndex: false
---

## JavaScript

```js
/*!
 * Automatically expand a textarea as the user types
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node} field The textarea
 */
function autoExpand (field) {

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	let computed = window.getComputedStyle(field);

	// Calculate the height
	let height =
		parseFloat(computed.paddingTop) +
		field.scrollHeight +
		parseFloat(computed.paddingBottom);

	field.style.height = height + 'px';

}
```

## CSS

```css
textarea {
	min-height: 5em;
	max-height: 50vh;
	width: 100%;
}
```