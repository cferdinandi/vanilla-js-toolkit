---
title: "Ternary Operator"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "A shorter way to write `if...else` statements."
weight: 10
---

A shorter way to write `if...else` statements. It has three parts:

```javascript
let someVar = [the condition] ? [the value if true] : [the value if false];
```

It's the equivalent of this.

```javascript
let someVar;

if ([the condition]) {
	someVar = [the value if true];
} else {
	someVar = [the value if false];
}
```

Let's say we wanted to define `answer` as `num` if `num` is greater than `10`. If not, we'll use `42`.

```javascript
let num = 0;
let answer = num > 10 ? num : 42;
```