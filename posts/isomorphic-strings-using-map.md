---
title: Isomorphic Strings using JavaScript Map
date: 2020-11-22T19:39:34.669Z
author: landro
summary: As a long time front end developer, I have historically relied on the
  backend wizards to flex their brains whenever it came to algorithms and data
  structures. With the huge migration of application logic to the frontend. It's
  high time I do some pushups.
tags:
  - post
---
![Retro analog style watch with equations for number such as 2x3 for 6](/static/img/algowatch.jpg)

Algorithm & Logic problems typically give me cold sweaty palms and a heavily glazed appearance. One of my least favorite aspects of development (wayyyy more than e2e testing or DNS!) 

A couple of reasons behind my aversion to these types of exercises in JavaScript:

1. For loops and nested/multi-dimensional for loops – I almost NEVER write for loops in JavaScript. Find, filter, map, reduce, filter, some, every or if I have to for each are my heavily used tools for working with Iterables. Nested for loops are rarely readable to me.
2. Most of these types of problems benefit greatly from a **`HashMap`** or **`Dictionary`** in implementation; JavaScript has neither.

Below is a logic puzzle called **Isomorphic Strings** I have no idea where this came from, but have run into it a couple times playing with leetcode or other frontend learning resources. What got me excited was the opportunity to use [JavaScript's Map() feature](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) to hold the Key-Value pairs in the comparison. I feel that it makes the isomorphic string matching implementation much more readable & maintainable.

#### The Isomorphic Strings Problem

Two strings **`string1`** and **`string2`** are called isomorphic if there is a one to one mapping possible for every character of **`string1`** to every character of **`string2`**. And all occurrences of every character in **`string1`** map to same character in **`string2`**

<p class="codepen" data-height="460" data-theme-id="light" data-default-tab="js" data-user="adhocracy" data-slug-hash="oNxrKoX" data-preview="true" style="height: 460px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Isomorphic Strings with Map()">
  <span>See the Pen <a href="https://codepen.io/adhocracy/pen/oNxrKoX">
  Isomorphic Strings with Map()</a> by jlandro (<a href="https://codepen.io/adhocracy">@adhocracy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**[➔ ➔ Try the string comparer out on CodePen ➔ ➔](https://codepen.io/adhocracy/full/oNxrKoX)**