---
layout: post
title: Puca Trade Series - Getting Points
subtitle: Techniques For Sending More Cards
slug: puca-series-getting-points
date: 2015-08-16 17:12 +1000
tags: [magic, puca]
---

Now that you've decided to sign up to [Puca Trade][1] you'll want people to 
send you cards. The problem is you need PucaPoints before people will send you 
cards. People have levelled complaints at [Puca Trade][1] that sending cards is
very hard. Cards can be snapped up in just a couple of seconds if they are in 
high circulation.

[Puca Trade][1] have mentioned that they are trying to keep their market place
healthy and employ an economist to ensure every move they make is sustainable.
The free points that you generate on signing up, which I'll do a article on 
later in this series, are an important part of keeping the wheels running. Just
like governments inject money into an economy, the few hundred free Puca points 
helps facilitate trading. 

Purchasing the Rare or Mythic subscription levels is a quick way to get 
PucaPoints, part of the first annual fee you pay goes into Puca points. If you 
think that the features for these levels would give you good value doing this 
will give you a quick injection of points. You can also just buy points, which 
is quick but expensive, it costs real money.

Personally I haven't done either of these yet, I might pay for a subscription at
some point, but I haven't found the need yet. I'm sure I'll want to receive some
foils in the near future though.

# Send Cards

I have been sending cards to people, to date I've sent 47 cards with a total 
value of 66,993 PucaPoints (also known as $USD669.93). In Australia we do have
issues of how much postage costs us. American's with their $USD1 global forever
stamps have things pretty good, our $AUD2.70 fee for postage within just our 
region is a much steeper issue towards efficient Puca Trading.

## Base Site

The base Puca site has pretty good tools. It matches the cards you own against
people who want and can afford the card in a list of countries you can pick.
Personally I leave it set to just the countries that I can send to for the 
$AUD2.70, ignoring countries in other areas that letters cost more to send
cards to. The problem is that filter currently gives me 50 cards I can send to
people around the Asia Pacific region. But only one of those cards is worth
more than 100 points ($USD1) and only one is worth more than the cost of a 
stamp to send it internationally. 

As you can sort the list by price it isn't too hard to use the site like this,
but when you are checking back several times a day to see if anything new can
be sent it turns what could be a 10 second process into a 30 second process. So
clearly unacceptable to the average lazy person.

## Sort By Points Per Member

The first script I started using was [Puca Trade Sort by PPM][2]. This script,
which you can run with [Tampermonkey][4] if you use Chrome or with 
[Greasemonkey][5] if you use Firefox, will add a column with the total value 
that you can get by sending cards to a given user. When you sort by that column
you get a really easy view of who you should send cards to.

Sort by PPM has a couple of problems, once you send a card the table updates
and hides that user that you wanted to send more cards to. It also doesn't check
that the value it has calculated is more than the receiver has available, so the 
sender needs to check and not do things on autopilot.

It will highlight the users that have points values over a threshold, with the 
ability to set a threshold for people within your country and another for people
with another threshold for all other countries. Which is pretty useful. The 
above issues are still significant.

## Puca Power

The best script I know of is [Puca Power][3], this gives you a lot of options 
for how to filter the table of data. Outright hiding all the receivers that it 
isn't worth the cost of a stamp to send cards to. I've been having some troubles
with the automated methods of loading the script the manual console method works 
well.

The best bit about it though is that it can run in a tab you aren't looking at 
and give you a notification when a new good trade pops up. As long as you spend
many hours on your computer this should make it easy for you to move lots of 
cards. I manage to keep it running at work, but without a audible notification 
as that would annoy my colleagues. Even without the the notification it helps me
send some cards every few days.

## Bots

There are rumours that there are bots that let you win the race to click send 
first. I wouldn't recommend them for two good reasons. Using them would be 
dishonest and against the terms of service, likely to get your account banned.

Lastly there is a new interface coming for [Puca Trade][1] in the next few 
months. What we've [seen so far][6] is pretty exciting, I'm not sure I like how
graphical they going but the features it is meant to include are exciting.

[1]: https://pucatrade.com/invite/gift/65746
[2]; https://gist.github.com/dacrosby
[3]: https://github.com/llamasoft/Puca-Power
[4]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
[5]: https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/
[6]: https://pucatrade.com/blog/2015/futuresight
