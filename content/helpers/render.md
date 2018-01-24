---
title: "render.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Render a web app template into the DOM."
weight: 20
noIndex: false
---

Render a web app template into the DOM. {{<learn-more title="Web Apps" url="web-apps">}}

```js
/*!
 * Render a template into the DOM
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String|Function} template The template to render
 * @param  {String|Node}     elem     The element to render into
 * @return {[type]}                   The element
 */
var render = function (template, elem) {

	// Set rendering element for the component
	if (typeof template === 'function') {
		template.elem = elem;
	}

	// If elem is an element, use it.
	// If it's a selector, get it.
	elem = typeof elem === 'string' ? document.querySelector(elem) : elem;
	if (!elem) return;

	// Get the template
	template = (typeof template === 'function' ? template(template.state) : template);
	if (typeof template !== 'string') return;

	// Render the template into the element
	if (elem.innerHTML === template) return;
	elem.innerHTML = template;

	// Dispatch a render event
	if (typeof window.CustomEvent === 'function') {
		var event = new CustomEvent('render', {
			bubbles: true
		});
		elem.dispatchEvent(event);
	}

	// Return the elem for use elsewhere
	return elem;

};
```