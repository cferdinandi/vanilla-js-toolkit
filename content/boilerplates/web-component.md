---
title: "Web Component"
date: 2018-01-24T12:16:26-05:00
description: "A way to define reusable custom HTML elements, with built-in styles and interactivity."
example: "a loading icon."
draft: false
weight: 60
noIndex: false
---

Change `my-library` to whatever namespace you'd like to use for your custom element, and `MyLibrary` to whatever namespace you’d like to use for your library. 

Web Component element names must include a `-`, and be registered with JavaScript. The JavaScript class for your library `extends` the `HTMLElement` object.

## Examples

```html
<my-library></my-library>
```

## The Boilerplate

```js
class MyLibrary extends HTMLElement {

	// The class constructor object
	constructor () {

		// Always call super first in constructor
		super();

		// Creates a shadow root
		this.root = this.attachShadow({mode: 'closed'});

		// Render HTML
		this.root.innerHTML =
			`<style>
				@media (prefers-reduced-motion: no-preference) {

					.loading-ring {
						display: inline-block;
						position: relative;
						width: 5em;
						height: 5em;
					}

					.loading-ring div {
						box-sizing: border-box;
						display: block;
						position: absolute;
						width: 4em;
						height: 4em;
						margin: 0.5em;
						border: 0.5em solid #000000;
						border-radius: 50%;
						animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
						border-color: #000000 transparent transparent transparent;
					}

					.loading-ring div:nth-child(1) {
						animation-delay: -0.45s;
					}

					.loading-ring div:nth-child(2) {
						animation-delay: -0.3s;
					}

					.loading-ring div:nth-child(3) {
						animation-delay: -0.15s;
					}

					@keyframes spin {
						0% {
							transform: rotate(0deg);
						}
						100% {
							transform: rotate(360deg);
						}
					}

					/**
					 * Visually hide an element, but leave it available for screen readers
					 * @link https://github.com/h5bp/html5-boilerplate/blob/master/dist/css/main.css
					 * @link http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
					 * @link https://github.com/h5bp/main.css/issues/12#issuecomment-321106995
					 */
					.visually-hidden {
						border: 0;
						clip: rect(0 0 0 0);
						height: 1px;
						overflow: hidden;
						padding: 0;
						position: absolute;
						white-space: nowrap;
						width: 1px;
					}

				}
			</style>
			<span class="visually-hidden" role="status">
				<slot>Loading...</slot>
			</span>
			<div class="loading-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>`;

	}

	// Runs when the value of an attribute is changed on the component
	attributeChangedCallback (name, oldValue, newValue) {

		// Remove the icon
		let icon = this.root.querySelector('.loading-ring');
		icon.remove();

		// Show a content loaded message
		let notify = this.root.querySelector('[role="status"]');
		notify.textContent = newValue.length ? newValue : 'Content loaded';

	}

	// Create a list of attributes to observe
	static get observedAttributes () {
		return ['loaded'];
	}

}

if ('customElements' in window) {
	customElements.define('my-library', MyLibrary);
}
```