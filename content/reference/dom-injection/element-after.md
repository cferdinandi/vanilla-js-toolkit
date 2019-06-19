---
title: "Element.after()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Insert an element into the DOM after another one."
polyfills: "[Requires a polyfill for IE.](/polyfills/after/)"
weight: 40
---

Insert an element in the DOM after another one. Call the `after()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the reference node
referenceNode.after(newNode);
```