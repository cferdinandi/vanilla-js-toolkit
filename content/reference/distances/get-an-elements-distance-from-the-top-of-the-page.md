---
title: "Get an element's distance from the top of the page"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 20
---

[`getOffsetTop()` is a helper method](/helpers/getoffsettop/) I wrote to get an element's distance from the top of the document.

```javascript
var elem = document.querySelector('#some-element');
var distance = getOffsetTop(elem);
```