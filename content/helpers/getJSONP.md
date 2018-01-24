---
title: "getJSONP.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get JSONP data from another server."
weight: 10
noIndex: false
---

Get JSONP data from another server. {{<learn-how hash="jsonp">}}

```js
/*!
 * Get JSONP data
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String}   url      The JSON URL
 * @param  {Function} callback The function to run after JSONP data loaded
 */
var getJSONP = function ( url, callback ) {

	// Create script with url and callback (if specified)
	var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
	var script = window.document.createElement( 'script' );
	script.src = url + (url.indexOf( '?' ) + 1 ? '&' : '?') + 'callback=' + callback;

	// Insert script tag into the DOM (append to <head>)
	ref.parentNode.insertBefore( script, ref );

	// After the script is loaded (and executed), remove it
	script.onload = function () {
		this.remove();
	};

};
```