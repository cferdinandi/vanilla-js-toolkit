---
title: "document.querySelector()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Find the first matching element on a page."
weight: 20
---

Find the first matching element on a page.

```javascript
// The first div
var elem = document.querySelector('div');

// The first div with the .bg-red class
var elemRed = document.querySelector('.bg-red');

// The first div with a data attribute of snack equal to carrots
var elemCarrots = document.querySelector('[data-snack="carrots"]');

// An element that doesn't exist
var elemNone = document.querySelector('.bg-orange');
```