---
title: "Element.parentNode"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 10
---

Get the parent of an element.

```javascript
var elem = document.querySelector('#some-elem');
var parent = elem.parentNode;
```

You can also string them together to go several levels up.

```javascript
var levelUpParent = elem.parentNode.parentNode;
```