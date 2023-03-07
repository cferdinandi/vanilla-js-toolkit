---
title: "document.querySelector()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Find the first matching element on a page."
weight: 20
---

Find the first matching element on a page. If an element isn't found, `querySelector()` returns `null`.

```javascript
// The first button
let button = document.querySelector('button');

// The first element with the .bg-red class
let red = document.querySelector('.bg-red');

// The first element with a data attribute of snack equal to carrots
let carrots = document.querySelector('[data-snack="carrots"]');
```