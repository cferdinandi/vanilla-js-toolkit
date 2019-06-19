---
title: "Element.before()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Insert an element into the DOM before another one."
polyfills: "[Requires a polyfill for IE.](/polyfills/before/)"
weight: 30
---

Insert an element before another one. Call the `before()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node before the reference node
referenceNode.before(newNode);
```