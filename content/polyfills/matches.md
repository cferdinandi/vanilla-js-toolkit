---
title: "matches()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

```js
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
```