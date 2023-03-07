---
title: "Window.getComputedStyle()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the computed style of an element."
weight: 20
---

Get the actual computed style of an element. This factors in browser default stylesheets as well as external styles you've specified.

```javascript
let sandwich = document.querySelector('#sandwich');
let bgColor = window.getComputedStyle(sandwich).backgroundColor;
```