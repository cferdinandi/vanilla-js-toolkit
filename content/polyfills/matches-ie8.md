---
title: "Element.matches() (Back to IE8)"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

This version pushes is support back to IE8, but [the IE9 and up version](/polyfills/matches/) is much better for performance.

```js
/**
 * Element.matches() polyfill (IE8 support)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		function (s) {
			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i = matches.length;
			while (--i >= 0 && matches.item(i) !== this) { }
			return i > -1;
		};
}
```