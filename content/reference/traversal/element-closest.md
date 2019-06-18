---
title: "Element.closest()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Implemented with vendor prefixes in a handful of browsers. [Use with a polyfill.](/polyfills/closest/)"
weight: 20
---

Get the closest parent up the DOM tree that matches against a selector. It also checks the element itself.

```javascript
var elem = document.querySelector('#some-elem');
var closestSandwich = elem.closest('[data-sandwich]');
```