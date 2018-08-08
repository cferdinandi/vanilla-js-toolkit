---
title: "document.exitFullscreen()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to IE11.

```js
/**
 * document.exitFullScreen() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!document.exitFullscreen) {
	document.exitFullscreen = document.mozExitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
}
```