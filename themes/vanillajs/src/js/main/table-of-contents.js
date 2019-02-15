/**
 * Generate a table of contents from headings
 * @param  {String} navSelector      Selector for the nav container
 * @param  {String} headingsSelector Selector for the headings
 * @param  {String} heading          The table of contents heading
 * @param  {String} styles           Any classes to add to the list nav
 * @param  {String} type             The list type (ul/ol)
 */
var tableOfContents = function (navSelector, headingsSelector, heading, styles, type) {

	'use strict';

	// Make sure a selector was provided
	if (!navSelector || !headingsSelector) return;

	// Get the nav
	var nav = document.querySelector(navSelector);
	if (!nav) return;

	// Variables
	var headings = document.querySelectorAll(headingsSelector);
	type = type || 'ul';
	var navList = '';

	// Loop through each heading
	for (var i = 0; i < headings.length; i++) {
		if (!headings[i].id) continue;
		navList += '<li><a href="#' + headings[i].id + '">' + headings[i].textContent + '</a></li>';
	}

	// Make sure a navList exists
	if (navList.length < 1) return;

	nav.innerHTML =
		(heading ? heading : '') +
		'<' + type + (styles ? ' class="' + styles + '"' : '') + '>' +
			navList +
		'</' + type + '>';

};