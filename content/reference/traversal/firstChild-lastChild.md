---
title: "Node.firstChild & Node.lastChild"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the first and last child nodes of a parent element."
weight: 50
---

Get the first and last child nodes of a parent element, including nodes that aren't elements (such as comments and text fragments).

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

// returns the comment node <!-- The gray wizard -->
let firstDescendant = wizards.firstChild;

// returns <li>Neville</li>
let lastDescendant = wizards.lastChild;
```