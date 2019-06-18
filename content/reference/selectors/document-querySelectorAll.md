---
title: "document.querySelectorAll()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 10
---

Find all matching elements on a page. You can use any valid CSS selector.

```javascript
// Get all elements with the .bg-red class
var elemsRed = document.querySelectorAll('.bg-red');

// Get all elements with the [data-snack] attribute
var elemsSnacks = document.querySelectorAll('[data-snack]');
```