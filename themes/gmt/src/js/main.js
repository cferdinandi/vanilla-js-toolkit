import '../../../../../gmt-theme/dist/js/_matches.polyfill.js';
import addHeadingLinks from '../../../../../gmt-theme/dist/js/heading-links.js';
import mailchimp from '../../../../../gmt-theme/dist/js/mailchimp.js';
import tableOfContents from '../../../../../gmt-theme/dist/js/tableOfContents.js';

// Mailchimp form
if (document.querySelector('#mailchimp-form')) {
	mailchimp(function (data) {
		if (data.code === 200) {
			window.location.href = 'https://gomakethings.com/newsletter-success';
		}
	});
}

// Add table of contents
if (document.querySelector('#table-of-contents')) {
	tableOfContents('#table-of-contents', 'h2', '<h2 class="h5">On this page</h2>', null, 'ul');
}

// Anchor links on posts
if (document.body.matches('.js-anchors')) {
	addHeadingLinks('h2, h3, h4, h5, h6', '#', 'link-no-underline');
}