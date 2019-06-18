---
title: "Element.matches()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: Implemented with vendor prefixes in a handful of browsers. [Use with a polyfill.](/polyfills/matches/)
weight: 30
---

Check if an element would be selected by a particular selector or set of selectors. Returns `true` if the element is a  match, and `false` when it's not.

```javascript
var elem = document.querySelector('#sandwich');
if (elem.matches('.turkey')) {
	console.log('It matches!');
} else {
	console.log('Not a match... =(');
}
```