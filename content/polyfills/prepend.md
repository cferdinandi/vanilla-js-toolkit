---
title: "prepend()"
date: 2018-01-24T12:16:26-05:00
draft: false
weight: 10
noIndex: false
---

Pushes support back to at least IE6.

```js
/**
 * ParentNode.prepend() polyfill
 */
// Source: https://github.com/Financial-Times/polyfill-service
var _mutation = (function () {

    function isNode(object) {
        // DOM, Level2
        if (typeof Node === 'function') {
            return object instanceof Node;
        }
        // Older browsers, check if it looks like a Node instance)
        return object &&
            typeof object === "object" &&
            object.nodeName &&
            object.nodeType >= 1 &&
            object.nodeType <= 12;
    }

    // http://dom.spec.whatwg.org/#mutation-method-macro
    return function mutation(nodes) {
        if (nodes.length === 1) {
            return isNode(nodes[0]) ? nodes[0] : document.createTextNode(nodes[0] + '');
        }

        var fragment = document.createDocumentFragment();
        for (var i = 0; i < nodes.length; i++) {
            fragment.appendChild(isNode(nodes[i]) ? nodes[i] : document.createTextNode(nodes[i] + ''));

        }
        return fragment;
    };
}());

Document.prototype.prepend = Element.prototype.prepend = function prepend() {
    this.insertBefore(_mutation(arguments), this.firstChild);
};
```