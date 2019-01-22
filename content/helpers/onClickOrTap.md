---
title: "onClickOrTap.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Run a callback after a click or tap, without running duplicate callbacks for the same event."
weight: 10
noIndex: false
---

```js
/*!
 * Run a callback after a click or tap, without running duplicate callbacks for the same event
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem       The element to listen for clicks and taps on
 * @param  {Function} callback The callback function to run on a click or tap
 */
var onClickOrTap = function (elem, callback) {

    // Make sure a callback is provided
    if ( !callback || typeof(callback) !== 'function' ) return;

    // Variables
    var isTouch, startX, startY, distX, distY;

    /**
     * touchstart handler
     * @param  {event} event The touchstart event
     */
    var onTouchStartEvent = function (event) {
        // Disable click event
        isTouch = true;

        // Get the starting location and time when finger first touches surface
        startX = event.changedTouches[0].pageX;
        startY = event.changedTouches[0].pageY;
    };

    /**
     * touchend handler
     * @param  {event} event The touchend event
     */
    var onTouchEndEvent = function (event) {

        // Get the distance travelled and how long it took
        distX = event.changedTouches[0].pageX - startX;
        distY = event.changedTouches[0].pageY - startY;

        // If a swipe happened, do nothing
        if ( Math.abs(distX) >= 7 || Math.abs(distY) >= 10 ) return;

        // Run callback
        callback(event);

    };

    /**
     * click handler
     * @param  {event} event The click event
     */
    var onClickEvent = function (event) {
        // If touch is active, reset and bail
        if ( isTouch ) {
            isTouch = false;
            return;
        }

        // Run our callback
        callback(event);
    };

    // Event listeners
    elem.addEventListener('touchstart', onTouchStartEvent, false);
    elem.addEventListener('touchend', onTouchEndEvent, false);
    elem.addEventListener('click', onClickEvent, false);

};
```