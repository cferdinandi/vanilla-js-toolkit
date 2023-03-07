---
title: "Element.className"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get and set classes on an element."
weight: 20
---

Get all of the classes on an element as a string, add a class or classes, or completely replace or remove all classes.

```javascript
let elem = document.querySelector('div');

// Get all of the classes on an element
let elemClasses = elem.className;

// Add a class to an element
elem.className += ' vanilla-js';

// Completely replace all classes on an element
elem.className = 'new-class';
```