/*! vanillajs v1.5.0 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/vanilla-js-toolkit */
(function () {
	'use strict';

	var loadCSS = function (href) {

		// Variables
		var refs = (document.body || document.getElementsByTagName('head')[0]).childNodes;
		var ref = refs[refs.length - 1];
		var sheets = window.document.styleSheets;

		// Create stylesheet
		var ss = document.createElement('link');
		ss.rel = 'stylesheet';
		ss.href = href;
		ss.media = 'only x';

		// wait until body is defined before injecting link. This ensures a non-blocking load in IE11.
		var ready = function (cb){
			if (document.body) return cb();
			setTimeout(function () {
				ready(cb);
			});
		};

		// Inject link
		// Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
		ready(function() {
			ref.parentNode.insertBefore(ss, ref.nextSibling);
		});

		// This function sets the link's media back to `all` so that the stylesheet applies once it loads
		// It is designed to poll until document.styleSheets includes the new sheet.
		var onloadcssdefined = function (cb) {
			var resolvedHref = ss.href;
			var i = sheets.length;
			while (i--) {
				if (sheets[i].href === resolvedHref){
					return cb();
				}
			}
			setTimeout(function () {
				onloadcssdefined (cb);
			});
		};

		var loadCB = function () {
			ss.media = 'all';
			if (!ss.addEventListener) return;
			ss.removeEventListener('load', loadCB, false);
		};

		// once loaded, set link's media back to `all` so that the stylesheet applies once it loads
		if (ss.addEventListener) {
			ss.addEventListener('load', loadCB, false);
		}

		onloadcssdefined(loadCB);

	};

	loadCSS(font);

	if ('fonts' in document) {
		Promise.all([
			document.fonts.load('1em PT Serif'),
			document.fonts.load('700 1em PT Serif'),
			document.fonts.load('italic 1em PT Serif'),
			document.fonts.load('italic 700 1em PT Serif')
		]).then(function () {
			document.documentElement.className += ' fonts-loaded';
		});
	}

}());
