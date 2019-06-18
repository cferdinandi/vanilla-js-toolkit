---
title: "Element.prepend()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "[Requires a polyfill for IE.](/polyfills/prepend/)"
weight: 50
---

Insert an element at the beginning of a set elements inside a shared parent. Call the `prepend()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('li');
newNode.textContent = 'I am new here.';

// Get the parent node
var referenceNode = document.querySelector('#some-element');

// Insert the new node before the first element in the reference node
referenceNode.prepend(newNode);
```