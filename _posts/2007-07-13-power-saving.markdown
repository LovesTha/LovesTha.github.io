---
author: rockpaperdynamite
comments: true
date: 2007-07-13 06:01:29+00:00
layout: post
slug: power-saving
title: Power Saving
wordpress_id: 282
categories:
- Geeky
---

I've just stumbled upon a little tool that Intel has released, PowerTOP. Named as such as its sort of 'top' for power consumption. It tells you which applications are causing the CPU to consume the most power, when a PC is idle this is caused by applications that frequently wake the processor out of its sleep state to do something.

The Intel site makes 2 interesting claims:



	
  * A Gnome desktop can be run with as few as 3 interrupts per second!

	
  * A Intel employee managed to increase his laptops run time from 4 to 7 hours.


I don't know about you, but if I can get my laptop up to 7 hours of run time, I'd love it. I will probably waste more time getting that number up than I will using it, but thats neither here nor there.

[Linkage.<!-- more -->](http://www.linuxpowertop.org/powertop.php)

The blog post that got me onto PowerTOP though was about the progression of the Linux kernel to a tickless system. The old kernel would wake it self every 1ms to check if it had something to do. This meant it was impossible to get to less than 1000 ticks per second with a Linux system (in contrast windows only uses 100 ticks, but this makes it less responsive to applications). I now believe that the kernel is using timer interupts more intelligently and only getting woken out of its sleep state when it has something to do, which may not even be every second.

In the mobile world this will mean longer battery life, in the server world it will mean less green house gases. In both worlds it will decrease overheads slightly so everything is more efficient.
