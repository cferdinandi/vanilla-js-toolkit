---
title: "Accordions"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works in Chrome, Firefox, and Safari, but not Edge or IE. It defaults to fully visible content in unsupported browsers. Edge will support this once they move over to webkit."
weight: 10
---

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