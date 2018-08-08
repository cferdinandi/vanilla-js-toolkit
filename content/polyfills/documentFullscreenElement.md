---
title: "document.fullscreenElement"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to IE11.

```js
/**
 * document.fullscreenElement polyfill
 * Adapted from https://shaka-player-demo.appspot.com/docs/api/lib_polyfill_fullscreen.js.html
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!document.fullscreenElement) {

	Object.defineProperty(document, 'fullscreenElement', {
		get: function() {
			return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement;
		}
	});

	Object.defineProperty(document, 'fullscreenEnabled', {
		get: function() {
			return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled;
		}
	});
}
```