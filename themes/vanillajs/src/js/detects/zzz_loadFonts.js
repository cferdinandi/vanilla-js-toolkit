/**
 * Load custom typeface
 */
;(function () {
	if (!('fonts' in document)) return;
	if (getCookie('fontsLoaded')) {
		document.documentElement.className += ' fonts-loaded';
		return;
	}
	document.fonts.load('1em PT Serif').then(function () {
		var expires = new Date(+new Date() + (7 * 24 * 60 * 60 * 1000)).toUTCString();
		document.cookie = 'fontsLoaded=true; expires=' + expires;
		document.documentElement.className += ' fonts-loaded';
	});
})();