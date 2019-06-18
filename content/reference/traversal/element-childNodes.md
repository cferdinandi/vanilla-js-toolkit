---
title: "Element.childNodes"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 50
---

Works similar to `.children`, but also finds text fragments and other non-element nodes.

```javascript
var elem = document.querySelector('#some-elem');
var descendants = wrapper.childNodes;
```