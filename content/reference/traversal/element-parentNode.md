---
title: "Element.parentNode"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the parent of an element."
weight: 10
---

Get the parent of an element.

```html
<div id="app">
	<h1>Hello, world!</h1>
</div>
```

```javascript
let h1 = document.querySelector('h1');

// returns the #app element
let parent = h1.parentNode;
```