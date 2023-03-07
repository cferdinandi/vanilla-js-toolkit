---
title: "Node.clone()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Create a copy of a node."
weight: 80
---

Create a copy of a node. Call on the node to clone. If you want all of a node's child nodes to also be copied, pass in `true` as an argument.

```html
<div id="app" class="background" data-app>
	<h1>Hello, world!</h1>
	<p>How are you today?</p>
	Nice to see you again.
</div>
```

```javascript
// returns <div id="app" class="background" data-app>
let app = document.querySelector('#app');

// Create a shallow clone
// returns <div id="app" class="background" data-app></div> as an empty node
let clone = app.cloneNode();

// Create a deep clone
// returns <div id="app" class="background" data-app></div> with the h1, p, and text nodes
let deepClone = app.cloneNode(true);
```