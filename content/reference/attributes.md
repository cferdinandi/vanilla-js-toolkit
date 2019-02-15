---
title: "Attributes"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 50
---

Get, set, remove, and check for the existence of attributes (including data attributes) on an element.

These methods can also be used to manipulate other types of attributes---things like `id`, `tabindex`, `name`, and so on.

```javascript
var elem = document.querySelector('#lunch');

// Get the value of an attribute
var sandwich = elem.getAttribute('data-sandwich');

// Set an attribute value
elem.setAttribute('data-sandwich', 'turkey');

// Remove an attribute
elem.removeAttribute('data-chips');

// Check if an element has an attribute
if (elem.hasAttribute('data-drink')) {
	console.log('Add a drink!');
}
```

*Works back to at least IE6.*