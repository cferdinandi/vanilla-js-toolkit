---
title: "Element.matches()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Check if an element would be selected by a particular selector or set of selectors."
weight: 30
---

Check if an element would be selected by a particular selector or set of selectors. Returns `true` if the element is a  match, and `false` when it's not.

```javascript
// Check if the first .bg-red element has the [data-snack attribute]
let red = document.querySelector('.bg-red');
if (red.matches('[data-snack]')) {
	console.log('Yummy snack!');
} else {
	console.log('No snacks');
}
```