---
title: "Properties"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get and set element properties."
weight: 50
---

HTML elements have dozens of properties that you can access directly.

Some of them are _read only_, meaning you can get their value but not set it. Others can be used to both read and set values. [You can find a full list on the Mozilla Developer Network.](https://developer.mozilla.org/en-US/docs/Web/API/element)

```javascript
let elem = document.querySelector('#main');

// Get the ID of the element
// returns "main"
let id = elem.id;

// Set the ID of the element
elem.id = 'secondary';

// Get the parentNode of the element
// This property is read-only
let parent = elem.parentNode;
```