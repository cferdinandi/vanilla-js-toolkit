/*!
 * vanillajs v1.5.0
 * The theme for vanillajstoolkit.com
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/vanilla-js-toolkit
 */

/**
 * Get the value of a cookie
 * Source: https://gist.github.com/wpsmith/6cf23551dd140fb72ae7
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
var getCookie = function (name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
};
/**
 * Load custom typeface
 */
;(function () {
	if (!('fonts' in document)) return;
	if (getCookie('fontsLoaded')) {
		document.documentElement.className += ' fonts-loaded';
		return;
	}
	document.fonts.load('1em PT Serif').then((function () {
		var expires = new Date(+new Date() + (7 * 24 * 60 * 60 * 1000)).toUTCString();
		document.cookie = 'fontsLoaded=true; expires=' + expires;
		document.documentElement.className += ' fonts-loaded';
	}));
})();