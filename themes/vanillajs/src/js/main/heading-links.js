/**
 * Add links to headings
 * @param {String} selector The headings to get in the DOM (uses querySelectorAll)
 * @param {String} content  The content to add to the anchor link [default: #]
 * @param {String} styles   The class(es) to add to the link [default: anchor-link]
 */
var addHeadingLinks = function (selector, content, styles) {

	'use strict';

	// Make sure a selector was provided
	if (!selector) return;

	// Variables
	var headings = document.querySelectorAll(selector);
	content = content || '#';
	styles = styles || 'anchor-link';

	// Loop through each heading and add an anchor link
	for (var i = 0; i < headings.length; i++) {
		if (!headings[i].id) continue;
		headings[i].innerHTML += ' <a class="' + styles + '" href="#' + headings[i].id + '">' + content + '</a>';
	}

};