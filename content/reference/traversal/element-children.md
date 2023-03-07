---
title: "Node.children"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the immediate descendant elements of an element."
weight: 30
---

Returns a live HTMLCollection, which means if items are added to it later, the collection updates as well.

```html
<div class="wizards">
	<ul>
		<li>Gandalf</li>
		<li>Radagast</li>
		<li>Hermione</li>
		<li>Neville</li>
	</ul>
</div>
```

```javascript
let wizards = document.querySelector('.wizards');
let wizardsList = document.querySelector('.wizards ul');

// returns an HTMLCollection with the ul element
let wizardDescendants = wizards.children;

// returns an HTMLCollection with the list items
let wizardListDescendants = wizardsList.children;

// Add a new item
let li = document.createElement('li');
li.textContent = 'Merlin';
wizardsList.append(li);

// wizardListDescendants now automatically contains the new li
```