---
title: "Element.getAttribute()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get an attribute on an element."
polyfills: "Works back to at least IE6."
weight: 10
---

Get an attribute (including data attributes) on an element. This method can also be used to manipulate other types of attributes---things like `id`, `tabindex`, `name`, and so on.

```javascript
var elem = document.querySelector('#lunch');
var sandwich = elem.getAttribute('data-sandwich');
```