---
title: "Smooth Scrolling"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works in Chrome and Firefox. No Edge, IE, or Safari support. Defaults to traditional anchor jumps in unsupported browsers."
weight: 30
---

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