---
title: "Node.after()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Insert an element into the DOM after another one."
weight: 30
---

Insert elements and strings after another element. Call the `Node.after()` method on the node you want to insert after, and pass in one or more new elements or strings as arguments.

```html
<div id="app">Good morning</div>
```

```javascript
// Create a new element
let p = document.createElement('p');
p.textContent = 'Hello!';

// Get the target node
let app = document.querySelector('#app');

// Insert the new node after the target node
// <div id="app">Good morning</div><p>Hello!</p>
app.after(p);

// You can inject more than one item by passing in multiple arguments
// <div id="app">Good morning</div><p>Hello!</p>What's poppin'
app.after(p, `What's poppin?`);
```