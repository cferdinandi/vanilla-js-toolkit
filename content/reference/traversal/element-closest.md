---
title: "Element.closest()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the closest parent element that matches a selector."
weight: 20
---

Get the closest parent up the DOM tree that matches against a selector.

The `Element.closest()` method starts with the element itself. You can start with the first parent element by pairing it with the `Node.parentNode` property.

```html
<main>
	<div class="hero">
		<div id="app">
			<h1 data-sandwich>Hello, world!</h1>
		</div>
	</div>
</main>
```

```javascript
let h1 = document.querySelector('h1');

// returns the .hero element
let hero = h1.closest('.hero');

// returns the h1 element itself
let sandwich = h1.closest('[data-sandwich]');

// Start with the element's parent
// returns null
let sandwich2 = h1.parentNode.closest('[data-sandwich]');
```