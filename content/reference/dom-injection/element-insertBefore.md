---
title: "Element.insertBefore()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Add an element to the DOM."
polyfills: "Works back to at least IE6."
weight: 20
---

The original way to add elements to the DOM. Call it on the parent of the element you’re inserting your new element before (the `referenceNode`), and pass in both the new element and the reference node as arguments.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.getElementById('some-element');

// Insert the new node before the reference node
referenceNode.parentNode.insertBefore(newNode, referenceNode);
```

You can also use it to inject an element *after* another one by using the `.nextSibling` property on your `referenceNode`.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.getElementById('#some-element');

// Insert the new node after the reference node
referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
```