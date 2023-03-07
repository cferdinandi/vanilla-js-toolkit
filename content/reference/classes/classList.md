---
title: "Element.classList"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Add, remove, toggle, and check for classes on an element."
weight: 10
---

Add, remove, toggle, and check for classes on an element.

```javascript
let elem = document.querySelector('#sandwich');

// Add the .turkey class
elem.classList.add('turkey');

// Remove the .tuna class
elem.classList.remove('tuna');

// Toggle the .tomato class on or off
// (Add the class if it's not already on the element, remove it if it is.)
elem.classList.toggle('tomato');

// Check if an element has the .mayo class
if (elem.classList.contains('mayo')) {
	console.log('add mayo!');
}
```