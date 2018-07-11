---
title: "off.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Remove an event listener."
weight: 10
noIndex: false
---

Remove an [event listener](/code-snippets/#event-listeners).

```js
/*!
 * Remove an event listener
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String}   event    The event type
 * @param  {Node}     elem     The element to remove the event to (optional, defaults to window)
 * @param  {Function} callback The callback that ran on the event
 * @param  {Boolean}  capture  If true, forces bubbling on non-bubbling events
 */
var off = function (event, elem, callback, capture) {
	if (typeof (elem) === 'function') {
		capture = callback;
		callback = elem;
		elem = window;
	}
	capture = capture ? true : false;
	elem = typeof elem === 'string' ? document.querySelector(elem) : elem;
	if (!elem) return;
	elem.removeEventListener(event, callback, capture);
};
```