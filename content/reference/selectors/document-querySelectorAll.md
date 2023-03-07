---
title: "document.querySelectorAll()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Find all matching elements on a page."
weight: 10
---

Find all matching elements on a page. You can use any valid CSS selector.

```javascript
// Get all button elements
let buttons = document.querySelectorAll('button');

// Get all elements with the .bg-red class
let elemsRed = document.querySelectorAll('.bg-red');

// Get all elements with the [data-snack] attribute
let elemsSnacks = document.querySelectorAll('[data-snack]');
```