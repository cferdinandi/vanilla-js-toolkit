---
title: "stopVideo.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Stop an iframe or HTML5 video from playing."
how: "https://gomakethings.com/stopping-youtube-vimeo-and-html5-videos-with-javascript/"
demo: ""
weight: 10
noIndex: false
---

```js
/**
 * Stop an iframe or HTML5 video from playing
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node} element The parent element the video is in
 */
var stopVideo = function (element) {
	var iframe = element.querySelector('iframe');
	var video = element.querySelector('video');
	if (iframe !== null) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if (video !== null) {
		video.pause();
	}
};
```