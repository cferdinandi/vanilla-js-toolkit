---
title: "Viewport Width"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the width of the viewport."
weight: 20
---

There are two methods to get the viewport width: `window.innerWidth` and `document.documentElement.clientWidth`. The former is more accurate. The latter has better browser support.

To get the best of both worlds, try `innerWidth` first, and fallback to `clientWidth` if not supported.

```javascript
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
```