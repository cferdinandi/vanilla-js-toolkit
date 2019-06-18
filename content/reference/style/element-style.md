---
title: "Element.style"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 10
---

Get and set inline styles for an element.

```javascript
var elem = document.querySelector('#sandwich');

// Get a style
// If this style is not set as an inline style directly on the element, it returns an empty string
// ex. <div id="sandwich" style="background-color: green"></div>
var bgColor = elem.style.backgroundColor; // this will return "green"
var fontWeight = elem.style.fontWeight; // this will return ""

// Set a style
elem.style.backgroundColor = 'purple';
```