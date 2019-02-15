---
title: "Traversing the DOM"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 110
---

## `parentNode`

Get the parent of an element.

```javascript
var elem = document.querySelector('#some-elem');
var parent = elem.parentNode;
```

You can also string them together to go several levels up.

```javascript
var levelUpParent = elem.parentNode.parentNode;
```

*Works back to at least IE6.*



## `closest()`

Get the closest parent up the DOM tree that matches against a selector. It also checks the element itself.

```javascript
var elem = document.querySelector('#some-elem');
var closestSandwich = elem.closest('[data-sandwich]');
```

*Implemented with vendor prefixes in a handful of browsers. [Use with a polyfill.](/polyfills/closest/)*



## Child elements by selector

The `querySelector()` and `querySelectorAll()` APIs aren't limited to just running on the `document`. They can be run on any element to search only for elements inside of it.

```javascript
var elem = document.querySelector('#some-elem');

// Find the first element inside `#some-elem` that has a `[data-snack]` attribute
var snack = elem.querySelector('[data-snack]');

// Get all divs inside `#some-elem`
var divs = elem.querySelectorAll('div');
```



## `children`

While `querySelector()` and `querySelectorAll()` search through all levels within a nested DOM/HTML structure, you may want to just get immediate descendant elements of a particular element. Use the `.children` property for this.

```javascript
var elem = document.querySelector('#some-elem');
var descendants = wrapper.children;
```



## `childNodes`

Works similar to `.children`, but also finds text fragments and other non-element nodes.

```javascript
var elem = document.querySelector('#some-elem');
var descendants = wrapper.childNodes;
```

*Works back to at least IE6.*



## Get sibling elements

[`getSiblings()` is a helper method](/helpers/getsiblings/) I wrote that gets the siblings of an element in the DOM. For example: if you had a list item (`<li>`) and wanted to grab all of the other items in the list.

```javascript
var elem = document.querySelector('#some-element');
var siblings = getSiblings(elem);
```