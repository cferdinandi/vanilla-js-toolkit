---
title: "Check if an element is in the viewport"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 30
---

[`isInViewport()` is a helper method](/helpers/isinviewport/) I wrote to check if any part of an element is in the viewport. It returns `true` if any part of the element is in the viewport, and `false` if it's not.

```javascript
var elem = document.querySelector('#some-element');
isInViewport(elem); // Boolean: returns true/false
```