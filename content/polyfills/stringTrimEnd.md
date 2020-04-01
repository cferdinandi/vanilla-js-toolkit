---
title: "String.trimEnd()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to IE9.

```js
/**
 * String.prototype.trimEnd() polyfill
 * Adapted from polyfill.io
 */
if (!String.prototype.trimEnd) {
	String.prototype.trimEnd = function () {
		return this.replace(new RegExp(/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source + '$', 'g'), '');
	};
}
```