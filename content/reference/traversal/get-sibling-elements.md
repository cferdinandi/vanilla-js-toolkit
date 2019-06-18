---
title: "Sibling elements"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 60
---

[`getSiblings()` is a helper method](/helpers/getsiblings/) I wrote that gets the siblings of an element in the DOM. For example: if you had a list item (`<li>`) and wanted to grab all of the other items in the list.

```javascript
var elem = document.querySelector('#some-element');
var siblings = getSiblings(elem);
```