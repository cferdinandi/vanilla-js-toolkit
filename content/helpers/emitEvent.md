---
title: "emitEvent.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Emit a custom event."
how: "https://gomakethings.com/adding-event-details-to-custom-events-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/QYwWxy"
weight: 10
noIndex: false
---

```js
/*!
 * Emit a custom event
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} type   The event type
 * @param  {Node}   elem   The element to attach the event to
 * @param  {Object} detail Any details to pass along with the event
 */
function emitEvent (type, elem = document, detail = {}) {

	// Make sure there's an event type
	if (!type) return;

	// Create a new event
	let event = new CustomEvent(type, {
		bubbles: true,
		cancelable: true,
		detail: detail
	});

	// Dispatch the event
	return elem.dispatchEvent(event);

}
```