---
title: Highlight substring in line of text with JavaScript!
date: 2020-11-24T23:50:47.947Z
author: landro
summary: Fast way to highlight matching substrings in a string of text, useful
  for autocomplete's and search implementations.
tags:
  - post
---
> The **`replace()`** method returns a new string with some or all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), and the `replacement` can be a string or a function to be called for each match. If `pattern` is a string, only the first occurrence will be replaced.
>
> The original string is left unchanged.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace>

```javascript
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

```