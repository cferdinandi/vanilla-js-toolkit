---
title: "Viewport Height"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 10
---

There are two methods to get the viewport height: `window.innerHeight` and `document.documentElement.clientHeight`. The former is more accurate. The latter has better browser support.

To get the best of both worlds, try `innerHeight` first, and fallback to `clientHeight` if not supported.

```javascript
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
```