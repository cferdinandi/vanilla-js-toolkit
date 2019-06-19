---
title: "Element.hasAttribute()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Check if an element has an attribute."
polyfills: "Works back to at least IE6."
weight: 40
---

Check for the existence of an attribute (including data attributes) on an element. This method can also be used to manipulate other types of attributes---things like `id`, `tabindex`, `name`, and so on.

```javascript
var elem = document.querySelector('#lunch');

if (elem.hasAttribute('data-drink')) {
	console.log('Add a drink!');
}
```