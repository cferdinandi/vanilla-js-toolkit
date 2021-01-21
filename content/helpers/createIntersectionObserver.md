---
title: "createIntersectionObserver.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "A wrapper function for creating new Intersection Observers."
how: ""
demo: ""
weight: 10
noIndex: false
---

```js
/*!
 * Create an intersection observer
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}     elem     The element to observe
 * @param  {Function} callback The callback function to run
 * @param  {Object}   options  The options, if any
 */
function createIntersectionObserver (elem, callback, options) {
	let observer = new IntersectionObserver(callback, options || {});
	observer.observe(elem);
	return observer;
}
```