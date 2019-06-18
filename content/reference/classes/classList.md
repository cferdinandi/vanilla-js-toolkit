---
title: "Element.classList"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to IE10. [Extend back to IE8 with a polyfill.](/polyfills/classlist/)"
weight: 10
---

Add, remove, toggle, and check for the presence of a class.

```javascript
var elem = document.querySelector('#sandwich');

// Add a class
elem.classList.add('turkey');

// Remove a class
elem.classList.remove('tuna');

// Toggle a class
// (Add the class if it's not already on the element, remove it if it is.)
elem.classList.toggle('tomato');

// Check if an element has a specific class
if (elem.classList.contains('mayo')) {
	console.log('add mayo!');
}
```