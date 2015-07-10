---
author: rockpaperdynamite
comments: true
date: 2007-06-26 05:05:14+00:00 +1000
layout: post
slug: programming-tip-1
title: 'Programming Tip #1'
wordpress_id: 273
tags:
- programming
---

<I know this is going to be incomprehensible for nearly all of my audience, but I wont stop talking about different topics till I manage to get my readership down to 0. The topic might have insights for a wider audience though.>

When programming I have started to find that if I am having trouble convincing something to do what I want it to do, chances are I'm using the wrong tool.

Today I realised this when I was converting constantly between AnsiStrings, integers and std::strings. Everything became much simpler and easier when I started using std::stringstreams, although Borland doesn't like to call them that it requires that I use the namespace and just use the basic name.
