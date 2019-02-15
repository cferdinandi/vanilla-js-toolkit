---
title: "The Viewport"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 120
---

## Get the viewport height

There are two methods to get the viewport height: `window.innerHeight` and `document.documentElement.clientHeight`. The former is more accurate. The latter has better browser support.

To get the best of both worlds, try `innerHeight` first, and fallback to `clientHeight` if not supported.

```javascript
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
```



## Get the viewport width

There are two methods to get the viewport width: `window.innerWidth` and `document.documentElement.clientWidth`. The former is more accurate. The latter has better browser support.

To get the best of both worlds, try `innerWidth` first, and fallback to `clientWidth` if not supported.

```javascript
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
```



## Check if an element is in the viewport

[`isInViewport()` is a helper method](/helpers/isinviewport/) I wrote to check if any part of an element is in the viewport. It returns `true` if any part of the element is in the viewport, and `false` if it's not.

```javascript
var elem = document.querySelector('#some-element');
isInViewport(elem); // Boolean: returns true/false
```