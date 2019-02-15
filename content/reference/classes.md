---
title: "Classes"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 30
---

## classList

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

*Works back to IE10. [Extend back to IE8 with a polyfill.](/polyfills/classlist/)*



## className

Get all of the classes on an element as a string, add a class or classes, or completely replace or remove all classes.

```javascript
var elem = document.querySelector('div');

// Get all of the classes on an element
var elemClasses = elem.className;

// Add a class to an element
elem.className += ' vanilla-js';

// Completely replace all classes on an element
elem.className = 'new-class';
```

*Works back to IE6.*