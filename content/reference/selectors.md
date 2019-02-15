---
title: "Selectors"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 10
---

## querySelectorAll()

Find all matching elements on a page. You can use any valid CSS selector.

```javascript
// Get all elements with the .bg-red class
var elemsRed = document.querySelectorAll('.bg-red');

// Get all elements with the [data-snack] attribute
var elemsSnacks = document.querySelectorAll('[data-snack]');
```



## querySelector()

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



## matches()

Check if an element would be selected by a particular selector or set of selectors. Returns `true` if the element is a  match, and `false` when it's not.

```javascript
var elem = document.querySelector('#sandwich');
if (elem.matches('.turkey')) {
	console.log('It matches!');
} else {
	console.log('Not a match... =(');
}
```

*Implemented with vendor prefixes in a handful of browsers. [Use with a polyfill.](/polyfills/matches/)*