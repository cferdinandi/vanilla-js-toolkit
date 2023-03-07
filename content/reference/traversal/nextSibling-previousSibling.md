---
title: "Node.nextSibling & Node.previousSibling"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the next and previous sibling node of an element."
weight: 70
---

Get the next and previous sibling node of an element, including nodes that aren't elements (such as comments and text fragments).

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

// returns <!-- The surprise hero -->
let next = hermione.nextSibling;

// returns <li>Radagast</li>
let previous = hermione.previousSibling;
```