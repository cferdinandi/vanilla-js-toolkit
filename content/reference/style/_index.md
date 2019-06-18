---
title: "Styles"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 40
---

## Inline Styles

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

*Works back to at least IE6.*



## Computed Styles

Get the actual computed style of an element. This factors in browser default stylesheets as well as external styles you've specified.

```javascript
var elem = document.querySelector('#some-elem');
var bgColor = window.getComputedStyle(elem).backgroundColor;
```