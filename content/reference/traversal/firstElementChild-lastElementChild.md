---
title: "Node.firstElementChild & Node.lastElementChild"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the first and last child element of a parent element."
weight: 60
---

Get the first and last child element of a parent element.

```html
<ul>
	<!-- The gray wizard -->
	<li>Gandalf</li>
	<li>Radagast</li>
	<li>Hermione</li>
	<!-- The surprise hero -->
	<li>Neville</li>
</ul>
```

```javascript
let wizards = document.querySelector('ul');

// returns <li>Gandalf</li>
let firstDescendant = wizards.firstElementChild;

// returns <li>Neville</li>
let lastDescendant = wizards.lastElementChild;
```