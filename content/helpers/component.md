---
title: "component.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Create a state-based component."
weight: 10
noIndex: false
---

Create a state-based component. <!-- {{<learn-more title="Web Apps" url="web-apps">}} -->

```js
/*!
 * A vanilla JS helper for creating state-based components
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param {String|Node} elem    The element to make into a component
 * @param {Object}      options The component options
 */
var Component = (function () {

	'use strict';

	/**
	 * Create the Component object
	 * @param {String|Node} elem    The element to make into a component
	 * @param {Object}      options The component options
	 */
	var Component = function (elem, options) {
		if (!elem) throw 'ComponentJS: You did not provide an element to make into a component.';
		this.elem = elem;
		this.data = options ? options.data : null;
		this.template = options ? options.template : null;
	};

	/**
	 * Sanitize and encode all HTML in a user-submitted string
	 * @param  {String} str  The user-submitted string
	 * @return {String}      The sanitized string
	 */
	Component.sanitize = function (str) {
		var temp = document.createElement('div');
		temp.textContent = str;
		return temp.innerHTML;
	};

	/**
	 * Render a template into the DOM
	 * @return {[type]}                   The element
	 */
	Component.prototype.render = function () {

		// Make sure there's a template
		if (!this.template) throw 'ComponentJS: No template was provided.';

		// If elem is an element, use it.
		// If it's a selector, get it.
		var elem = typeof this.elem === 'string' ? document.querySelector(this.elem) : this.elem;
		if (!elem) return;

		// Get the template
		var template = (typeof this.template === 'function' ? this.template(this.data) : this.template);
		if (['string', 'number'].indexOf(typeof template) === -1) return;

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

	return Component;

})();
```