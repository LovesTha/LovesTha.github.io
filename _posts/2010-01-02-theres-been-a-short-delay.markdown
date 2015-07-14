---
author: rockpaperdynamite
comments: true
date: 2010-01-02 14:12:51+00:00 +1000
layout: post
slug: theres-been-a-short-delay
title: There's Been a Short Delay
wordpress_id: 532
tags: meta
---

Sorry for the long time between posts, I suspect this might have gotten me off a few peoples RSS feed lists. I know that shorter silences have made me delete blogs before :)

Anyway, the topic today manages to refer to both my bogging absence and what's got my goat at the moment.

Ubuntu 9.10 was released a little while ago and it doesn't look too bad. I upgraded my laptop shortly after the official release and the media box at home only this last fortnight. I needed to upgrade it because it was running out of space on / and I wanted to start running Deluge as a daemon on the media box and the front end on my laptop. It was an upgrade from 8.04 I believe so I just did a fresh install formating / and keeping /data and /home intact.

This afternoon when I rebooted the media box I had to do this dance to try to make the torrents recheck their data because they were all at 0% apparently. Many attempts to get them to recheck their status left them at "0% checking" until eventually they started checking and everything was ok again. Naturally I thought that the last thing I did, pause -> force-recheck while un bandwidth throttled, was the silly new required dance to fix things.<!-- more -->

So when it happened again this evening it was a surprise to me that it failed to recheck the status. So I started looking for a real root problem. After some searching top told me that fsck.ext3 was still running. This surprised me as the system had finished booting and had auto logged a user into the desktop.

This was due to a somewhat under the radar change to default policy in Ubuntu that had bitten me on the arse pretty hard. Apparently its been decided that file systems in /etc/fstab that are marked as auto mount can be lazy mounted. So you can't assume that they are mounted before other services are run or even the user allowed to log in.

If you aren't using X /home isn't even going to be mounted by the time other services are being started.

At no point during the install are you asked about this option, even when doing an alternate install. Rumour has it that it is the default behaviour even on server installs. That strikes me as blatantly the wrong choice. I can see the case for wanting a super quick boot on desktop, but server guys are used to setting non-essential file systems to non auto mount. And they are used to relying on the default behaviour of everything mounted or no boot.

So now I've added the bootwait option to /data, /home will wait to be finished because I am using X, although I may stop using X and use xbmc as the default gui shell soon. Even this 'fix' feels wrong to me, they should have just used that mysterious third column of fstab.

The third column instructs the boot process in which order and when to check file systems. File systems with a 'pass' value of 1 will be checked in the first pass, typically this will be only / and you'll also want it to be mounted as read only if the check fails. If you have a pass value of 2 you get done in the second pass, typically this was just every other auto mounted file system. Wouldn't it have made sense to keep a value of 2 to mean you want the file system to be checked and mounted before continuing the boot process and to use a value of 3 to say that the check can be run in the background?

There was no need for a special mount option, there was already a sensible field to use for the new configuration.
