---
title: "escapeCharacters.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Escape special characters in IDs for use with querySelector."
weight: 10
noIndex: false
---

Escape special characters in IDs for use with querySelector. {{<learn-how url="https://gomakethings.com/what-to-do-when-queryselector-throws-errors-on-valid-ids/">}}

```js
/**
 * Escape special characters for use with querySelector
 * @author Mathias Bynens
 * @link https://github.com/mathiasbynens/CSS.escape
 * @param {String} id The anchor ID to escape
 */
var escapeCharacters = function (id) {

	var string = String(id);
	var length = string.length;
	var index = -1;
	var codeUnit;
	var result = '';
	var firstCodeUnit = string.charCodeAt(0);
	while (++index < length) {
		codeUnit = string.charCodeAt(index);
		// Note: there’s no need to special-case astral symbols, surrogate
		// pairs, or lone surrogates.

		// If the character is NULL (U+0000), then throw an
		// `InvalidCharacterError` exception and terminate these steps.
		if (codeUnit === 0x0000) {
			throw new InvalidCharacterError(
				'Invalid character: the input contains U+0000.'
			);
		}

		if (
			// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
			// U+007F, […]
			(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
			// If the character is the first character and is in the range [0-9]
			// (U+0030 to U+0039), […]
			(index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
			// If the character is the second character and is in the range [0-9]
			// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
			(
				index === 1 &&
				codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
				firstCodeUnit === 0x002D
			)
		) {
			// http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
			result += '\\' + codeUnit.toString(16) + ' ';
			continue;
		}

		// If the character is not handled by one of the above rules and is
		// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
		// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
		// U+005A), or [a-z] (U+0061 to U+007A), […]
		if (
			codeUnit >= 0x0080 ||
			codeUnit === 0x002D ||
			codeUnit === 0x005F ||
			codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
			codeUnit >= 0x0041 && codeUnit <= 0x005A ||
			codeUnit >= 0x0061 && codeUnit <= 0x007A
		) {
			// the character itself
			result += string.charAt(index);
			continue;
		}

		// Otherwise, the escaped character.
		// http://dev.w3.org/csswg/cssom/#escape-a-character
		result += '\\' + string.charAt(index);

	}

	// Return sanitized string
	var decoded;
	try {
		decoded = decodeURIComponent(result);
	} catch(e) {
		decoded = result;
	}
	return decoded;

};
```