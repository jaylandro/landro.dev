---
title: Isomorphic Strings using JavaScript Map
date: 2020-10-24T04:04:06.329Z
author: landro
summary: One area I have room to grow is my algorithms, data structures and
  logic approaches. As a long time front end developer, these are the types of
  things I have historically relied on the backend wizards to flex their brains.
  With the huge migration of application logic to the frontend. It's high time I
  do some pushups.
tags:
  - post
---
Some reasons for my aversion to exercises like these in JavaScript:

1. For loops and nested/multi-dimensional for loops – I almost NEVER write for loops in JavaScript. Find, filter, map, reduce, filter, some, every or if I have to for each are my heavily used tools for working with Iterables. Nested for loops are rarely readable to me.


2. Most of these types of problems benefit greatly from a **`HashMap`** or **`Dictionary`** in implementation; JavaScript has neither.

Below is a logic puzzle called **Isomorphic Strings** I have no idea where this came from, but have run into it a couple times playing with leetcode or other frontend learning resources. What got me excited was the opportunity to use [JavaScript's Map() feature](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) to hold the Key-Value pairs in the comparison. I feel that it makes the isomorphic string matching implementation much more readable & maintainable.

Two strings **`string1`** and **`string2`** are called isomorphic if there is a one to one mapping possible for every character of **`string1`** to every character of **`string2`**. And all occurrences of every character in **`string1`** map to same character in **`string2`**

<p class="codepen" data-height="460" data-theme-id="light" data-default-tab="js" data-user="adhocracy" data-slug-hash="oNxrKoX" data-preview="true" style="height: 460px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Isomorphic Strings with Map()">
  <span>See the Pen <a href="https://codepen.io/adhocracy/pen/oNxrKoX">
  Isomorphic Strings with Map()</a> by jlandro (<a href="https://codepen.io/adhocracy">@adhocracy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>