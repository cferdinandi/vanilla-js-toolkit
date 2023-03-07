---
title: "Node.nextElementSibling & Node.previousElementSibling"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the next and previous sibling element of an element."
weight: 80
---

Get the next and previous sibling element of an element.

```html
<ul>
	<!-- The gray wizard -->
	<li>Gandalf</li>
	<li>Radagast</li>
	<li id="hermione">Hermione</li>
	<!-- The surprise hero -->
	<li>Neville</li>
</ul>
```

```javascript
let hermione = document.querySelector('#hermione');

// returns <li>Neville</li>
let next = hermione.nextElementSibling;

// returns <li>Radagast</li>
let previous = hermione.previousElementSibling;
```