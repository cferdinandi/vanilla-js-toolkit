---
title: "cleanHTML.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Sanitize an HTML string to reduce the risk of XSS attacks."
how: ""
demo: "https://codepen.io/cferdinandi/pen/MWmXNeN"
weight: 10
noIndex: false
---

```js
/**
 * Sanitize an HTML string
 * @param  {String}          str   The HTML string to sanitize
 * @param  {Boolean}         nodes If true, returns HTML nodes instead of a string
 * @return {String|NodeList}       The sanitized string or nodes
 */
function cleanHTML (str, nodes) {

	/**
	 * Convert the string to an HTML document
	 * @return {Node} An HTML document
	 */
	function stringToHTML () {
		let parser = new DOMParser();
		let doc = parser.parseFromString(str, 'text/html');
		return doc.body || document.createElement('body');
	}

	/**
	 * Check if the attribute is potentially dangerous
	 * @param  {String}  name  The attribute name
	 * @param  {String}  value The attribute value
	 * @return {Boolean}       If true, the attribute is potentially dangerous
	 */
	function isPossiblyDangerous (name, value) {
		let val = value.replace(/\s+/g, '').toLowerCase();
		if (['src', 'href', 'xlink:href'].includes(name)) {
			if (val.includes('javascript:') || val.includes('data:text/html')) return true;
		}
		if (name.startsWith('on')) return true;
	}

	/**
	 * Remove potentially dangerous attributes from an element
	 * @param  {Node} elem The element
	 */
	function removeAttributes (elem) {

		// If the node is not an element, bail
		if (elem.nodeType !== 1) return;

		// Otherwise, loop through each attribute
		// If it's dangerous, remove it
		let atts = elem.attributes;
		for (let {name, value} of atts) {
			if (!isPossiblyDangerous(name, value)) continue;
			elem.removeAttribute(name);
		}

	}

	/**
	 * Remove <script> elements
	 * @param  {Node} html The HTML
	 */
	function removeScripts (html) {
		let scripts = html.querySelectorAll('script');
		for (let script of scripts) {
			script.remove();
		}
	}

	/**
	 * Remove dangerous stuff from the HTML document's nodes
	 * @param  {Node} html The HTML document
	 */
	function cleanHTML (html) {
		let nodes = html.childNodes;
		for (let node of nodes) {
			removeAttributes(node);
			cleanHTML(node);
		}
	}

	// Convert the string to HTML
	let html = stringToHTML();

	// Sanitize it
	cleanHTML(html);
	removeScripts(html);

	// If the user wants HTML nodes back, return them
	// Otherwise, pass a sanitized string back
	return nodes ? html.childNodes : html.innerHTML;

}
```