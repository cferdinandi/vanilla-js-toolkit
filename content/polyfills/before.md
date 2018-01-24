---
title: "before()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

```js
/**
 * ChildNode.before() polyfill
 */
// from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/before()/before().md
(function (arr) {
	arr.forEach(function (item) {
		if (item.hasOwnProperty('before')) {
			return;
		}
		Object.defineProperty(item, 'before', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function before() {
				var argArr = Array.prototype.slice.call(arguments),
					docFrag = document.createDocumentFragment();

				argArr.forEach(function (argItem) {
					var isNode = argItem instanceof Node;
					docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});

				this.parentNode.insertBefore(docFrag, this);
			}
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
```