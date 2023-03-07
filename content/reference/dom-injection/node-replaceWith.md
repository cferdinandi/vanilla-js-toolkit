---
title: "Node.replaceWith()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Replace an element with another."
weight: 70
---

Replace an element (and all of its HTML elements and content) with another. Call the `Node.replaceWith()` method on the target node, and pass in one or more elements or strings as arguments.

```html
<h1>Good evening</h1>
```

```javascript
// Get the target element
let h1 = document.querySelector('h1');

// Create a new element
let p = document.createElement('p');
p.textContent = 'Good morning';

// Replace the target with the new element
// <p>Good morning</p>
h1.replaceWith(p);

// You can replace it with more than one item by passing in multiple arguments
// <p>Good morning</p>How are you today?
h1.replaceWith(p, 'How are you today?');
```