---
title: "animate.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Apply a CSS animation to an element."
weight: 10
noIndex: false
---

Apply a CSS animation to an element. {{<learn-more url="https://gomakethings.com/a-vanilla-js-animation-helper-function/">}}

```js
/*!
 * Apply a CSS animation to an element
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem      The element to animate
 * @param  {String}  animation The type of animation to apply
 * @param  {Boolean} hide      If true, apply the [hidden] attribute after the animation is done
 */
var animate = function (elem, animation, hide) {

	// If there's no element or animation, do nothing
	if (!elem || !animation) return;

	// Remove the [hidden] attribute
	elem.removeAttribute('hidden');

	// Apply the animation
	elem.classList.add(animation);

	// Detect when the animation ends
	elem.addEventListener('animationend', function endAnimation (event) {

		// Remove the animation class
		elem.classList.remove(animation);

		// If the element should be hidden, hide it
		if (hide) {
			elem.setAttribute('hidden', 'true');
		}

		// Remove this event listener
		elem.removeEventListener('animationend', endAnimation, false);

	}, false);

};
```