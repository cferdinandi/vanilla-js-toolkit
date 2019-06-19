---
title: "Element.children"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the immediate descendant elements of an element."
weight: 40
---

While `querySelector()` and `querySelectorAll()` search through all levels within a nested DOM/HTML structure, you may want to just get immediate descendant elements of a particular element. Use the `.children` property for this.

```javascript
var elem = document.querySelector('#some-elem');
var descendants = wrapper.children;
```