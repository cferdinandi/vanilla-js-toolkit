---
title: "Element.removeChild()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 80
---

Remove an element from the DOM. This method is called against the target element's parent, which you can get with `parentNode`.

```javascript
var elem = document.querySelector('#some-element');
elem.parentNode.removeChild(elem);
```