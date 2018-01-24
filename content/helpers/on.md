---
title: "on.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Add an event listener."
weight: 2
noIndex: false
---

Add an [event listener](/code-snippets/#event-listeners).

```js
/*!
 * Add an event listener
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String}   event    The event type
 * @param  {Node}     elem     The element to attach the event to (optional, defaults to window)
 * @param  {Function} callback The callback to run on the event
 * @param  {Boolean}  capture  If true, forces bubbling on non-bubbling events
 */
var on = function (event, elem, callback, capture) {
	if (typeof (elem) === 'function') {
		capture = callback;
		callback = elem;
		elem = window;
	}
	capture = capture ? true : false;
	elem.addEventListener(event, callback, capture);
};
```