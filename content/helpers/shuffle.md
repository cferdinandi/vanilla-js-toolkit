---
title: "shuffle.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Randomly shuffle an array."
how: "https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/dazXMX"
weight: 10
noIndex: false
---

```js
/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};
```