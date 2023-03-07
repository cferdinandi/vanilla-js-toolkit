---
title: "Element.getBoundingClientRect()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get information about the size of an element and its position relative to the viewport."
weight: 30
---

Get information about the size of an element and its position relative to the viewport.

```javascript
let app = document.querySelector('#app');
let details = app.getBoundingClientRect();

// logs an object with top, let, bottom, right, height, and width properties
console.log(details);
```