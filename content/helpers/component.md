---
title: "component.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Create a web app component."
weight: 20
noIndex: false
---

Create a web app component. {{<learn-more title="Web Apps" url="web-apps">}}

```js
/*!
 * Create a component
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function}       template  The template function
 * @param  {Object}         props     The state data
 * @param  {String|Element} elem      The element to render content into
 * @return {Function}                 The template function
 */
var component = function (template, props, elem) {

	Object.defineProperties(template, {
		elem: {
			value: elem,
			writable: true
		},
		state: {
			value: props,
			writable: true
		},
		setState: {
			value: function (props) {

				// Shallow merge new properties into state object
				for (var key in props) {
					if (props.hasOwnProperty(key)) {
						template.state[key] = props[key];
					}
				}

				// Render the element
				render(template, template.elem);

				// Return the elem for use elsewhere
				return template.elem;

			}
		}
	});

	// Return the elem for use elsewhere
	return template;

};
```