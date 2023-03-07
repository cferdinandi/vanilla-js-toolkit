---
title: "Disclosure"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Create an expand-and-collapse disclosure element."
weight: 10
---

Use the `details` and `summary` elements to create expand-and-collapse disclosure components.

Put your entire content inside a `details` element. The heading that should act as the toggle goes inside a `summary` element. Use the `open` attribute to make your disclosure component expanded by default.

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

[Disclosure Demo &rarr;](https://codepen.io/cferdinandi/pen/exoKgo)