---
title: "Window.getComputedStyle()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 20
---

Get the actual computed style of an element. This factors in browser default stylesheets as well as external styles you've specified.

```javascript
var elem = document.querySelector('#some-elem');
var bgColor = window.getComputedStyle(elem).backgroundColor;
```