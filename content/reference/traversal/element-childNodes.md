---
title: "Node.childNodes"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the immediate descendants of an element, including text fragments and other non-element nodes."
weight: 40
---

Get the immediate descendants of an element, including text fragments and other non-element nodes.

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

// returns all nodes, including the comments
let descendants = wizards.childNodes;
```