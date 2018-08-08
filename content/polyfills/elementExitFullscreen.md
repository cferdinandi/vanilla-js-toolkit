---
title: "Element.exitFullscreen()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to IE11.

```js
/**
 * Element.exitFullScreen() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Element.prototype.exitFullscreen) {
	Element.prototype.exitFullscreen = Element.prototype.mozExitFullscreen || Element.prototype.webkitExitFullscreen || Element.prototype.msExitFullscreen;
}
```