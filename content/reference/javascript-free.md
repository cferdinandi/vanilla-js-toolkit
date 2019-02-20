---
title: "JavaScript-Free Components"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 420
---

It's sometimes possible to create JavaScript-free interactive components entirely with native HTML elements.

These are *not* hacks. They're semantically valid, accessible components that browsers give you out-of-the-box. These can all be treated as progressive enhancements, with no fallbacks needed for unsupported browsers.

*__Quick aside:__ many of the CSS-only versions of JavaScript components that you see on other sites __are__ hacks, and suffer from usability and accessibility issues as a result.*

## Accordions

Use the `details` and `summary` elements to create accordions.

Put your entire accordion content inside a `details` element. The heading that should act as a toggle goes inside a `summary` element. Use the `open` attribute to make your accordion expanded by default.

```html
<details>
	<summary>The toggle</summary>
	The content.
</details>

<details open>
	<summary>Another toggle</summary>
	Expanded by default
</details>
```

You can style the dropdown arrow with CSS.

```css
/**
 * 1. Styling for Firefox and other non-webkit/blink browsers
 * 2. Styling for webkit and blink
 */
summary, /* 1 */
summary::-webkit-details-marker { /* 2 */
	list-style-image: url('');
}
```

[Accordion Demo &rarr;](https://codepen.io/cferdinandi/pen/exoKgo)

*Works in Chrome, Firefox, and Safari, but not Edge or IE. It defaults to fully visible content in unsupported browsers. Edge will support this once they move over to webkit.*

## Autocomplete

Create a label and input like you normally would. Then create a `datalist` element, and add an `option` element for each autocomplete choice.

Give the `datalist` an ID. Add the `list` property to your input with a value equal to your `datalist` ID.

```html
<label for="states">Who's the best wizard?</label>
<input type="text" id="wizards" name="wizards" list="wizards-list">
<datalist id="wizards-list">
	<option>Harry Potter</option>
	<option>Hermione</option>
	<option>Dumbledore</option>
	<option>Merlin</option>
	<option>Gandalf</option>
</datalist>
```

[Autocomplete Demo &rarr;](https://codepen.io/cferdinandi/pen/BMEVrx)

*Works in Chrome, Firefox, and IE11 and up, but not Safari. Defaults to a standard input in unsupported browsers.*

## Smooth Scrolling

The `scroll-behavior` CSS property tells the browser how to handle scrolling triggered by anchor links and such.

The default behavior, `auto`, is the jump-to-location you’re used to seeing. If you set it to `smooth`, the browser animates scrolling down the page.

If you only want this behavior inside a container, apply it to that element. Otherwise, apply it to the whole document.

```css
/**
 * Smooth scrolling inside an element
 */
#my-element {
	scroll-behavior: smooth;
}

/**
 * Smooth scrolling on the whole document
 */
html {
	scroll-behavior: smooth;
}
```

For people prone to motion sickness, this effect can be really jarring, though.

Fortunately, users in some browsers/operating systems can express their preference for reduced motion effects with the Reduce Motion API. We can listen for that setting in our CSS, and turn off smooth scrolling for them.

```css
@media screen and (prefers-reduced-motion: reduce) {
	#my-element {
		scroll-behavior: auto;
	}

	html {
		scroll-behavior: auto;
	}
}
```

[Smooth Scroll Demo &rarr;](https://codepen.io/cferdinandi/pen/LqGZrb)

*Works in Chrome and Firefox. No Edge, IE, or Safari support. Defaults to traditional anchor jumps in unsupported browsers.*