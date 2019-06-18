---
title: "Element.setAttribute()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 20
---

Set an attribute (including data attributes) on an element. This method can also be used to manipulate other types of attributes---things like `id`, `tabindex`, `name`, and so on.

```javascript
var elem = document.querySelector('#lunch');
elem.setAttribute('data-sandwich', 'turkey');
```