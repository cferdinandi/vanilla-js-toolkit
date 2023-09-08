---
title: "getFlagEmoji.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get the flag emoji for a two-letter country code."
how: "https://gomakethings.com/getting-emoji-from-country-codes-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/wvRgbpp?editors=0011"
weight: 10
noIndex: false
---

```js
/**
 * Get the flag emoji for the country
 * @link https://dev.to/jorik/country-code-to-flag-emoji-a21
 * @param  {String} countryCode The country code
 * @return {String}             The flag emoji
 */
function getFlagEmoji (countryCode) {
	let codePoints = countryCode.toUpperCase().split('').map(char =>  127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}
```