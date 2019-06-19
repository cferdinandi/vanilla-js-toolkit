---
title: "Element.append()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Insert an element at the end of a set of elements inside a shared parent."
polyfills: "[Requires a polyfill for IE.](/polyfills/append/)"
weight: 60
---

Insert an element at the end of a set elements inside a shared parent. Call the `append()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('li');
newNode.textContent = 'I am new here.';

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the last element in the reference node
referenceNode.append(newNode);
```