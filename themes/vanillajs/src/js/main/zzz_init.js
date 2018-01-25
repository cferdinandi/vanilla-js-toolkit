/**
 * Script initializations
 */

// Responsive iframe videos
fluidvids.init({
	selector: ['iframe', 'object'],
	players: ['www.youtube.com', 'player.vimeo.com', 'www.slideshare.net', 'www.hulu.com', 'videopress.com/embed/']
});

// Smooth scrolling anchor links
if (document.querySelector('a[href*="#"]')) {
	var scroll = new SmoothScroll('a[href*="#"]');
}

// Form validation
if (document.querySelector('#mc-embedded-subscribe-form')) {
	validate.init({
		selector: '#mc-embedded-subscribe-form', // The selector for forms to validate
		disableSubmit: true, // If true, don't submit the form to the server (for Ajax for submission)
		onSubmit: function (form, fields) { // Function to run if the form successfully validates
			submitMailChimpForm(form);
		}
	});
}

// Add table of contents
if (document.querySelector('#table-of-contents')) {
	tableOfContents('#table-of-contents', 'h2', '<h2>Table of Contents</h2>', null, 'ol');
}

// Anchor links on posts
if (document.body.matches('.js-anchors')) {
	addHeadingLinks('h2, h3, h4, h5, h6', '#', 'link-no-underline');
}