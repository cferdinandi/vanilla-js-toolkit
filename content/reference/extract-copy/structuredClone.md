---
title: "structuredClone()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Expand array or object properties into their own values."
weight: 40
---

The `structuredClone()` method accepts an array or object as an argument, and returns a deep copy or deep clone.

```js
// A multidimensional array
let wizards = [{
	name: 'Radagast',
	color: 'brown'
}, {
	name: 'Gandalf',
	color: 'gray'
}];

// Create a copy of the wizards array
let wizardsCopy = structuredClone(wizards);
```