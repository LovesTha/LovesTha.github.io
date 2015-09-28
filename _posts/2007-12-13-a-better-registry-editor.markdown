---
author: rockpaperdynamite
comments: true
date: 2007-12-13 02:29:02+00:00 +1000
layout: post
slug: a-better-registry-editor
title: A Better Registry Editor
wordpress_id: 324
tags:
- technology
tags:
- coding
- reg ex
- registry
---

I need, and my Google foo has failed to find, a registry editor that lets me deal with a very common problem I have. The root problem is I don't want manual steps in the setup of an application I am involved with creating. It relies on IRQ to be enabled for the LPT on a windows PC, but scince Windows 2000 Microsoft has decided that they shouldn't enable them by default.

Due to where Windows stores the setting for this:

HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum\ACPI\**PNP0400**\_4&4b018eb&0_\Device Parameters\FilterResourceMethod=dword:00000002<!-- more -->

It is hard to automate the setting of this value.  The bold section of the location appears to be reasonably static on Windows XP only varying by 1 or two digits, with a large section of unused values before we collide with the next key which corresponds to different hardware. The italics section appears to be essentially random. I'm sure it corresponds to some value associated with the specific hardware, but to a dumb user like me it looks random.

All I want to do is be able to issue this command at a command prompt:

setreg  HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum\ACPI\PNP040[1:0]\*\Device Parameters\FilterResourceMethod 2

I believe no such program exists though. The number of times I want it though makes me think I should write it. I can't be the only one who wants it. I'm _sure_ its my ticket to a care free life.
