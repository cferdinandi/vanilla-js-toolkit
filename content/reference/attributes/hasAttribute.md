---
title: "Element.hasAttribute()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Check if an element has an attribute."
weight: 40
---

Check for the existence of an attribute (including data attributes) on an element.

```javascript
let elem = document.querySelector('#lunch');

if (elem.hasAttribute('data-drink')) {
	console.log('Add a drink!');
}
```