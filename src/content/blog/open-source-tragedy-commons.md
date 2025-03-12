---
title: 'Open source and tragedy of the commons'
description: 'There is every incentive to drain the ecosystem'
pubDate: 'Mar 12 2025'
license: 'cc'
emoji: '🍂'
tags: ['essay', 'tech']
lang: 'en'
---

No, open source isn't dead. It is obviously struggling, gentrified, commodified, and abused by cloud feudal lords, but it's alive.

Most of the OSS licenses out there were implemented in the pre-cloud era. GPL protected programs from being re-packed and sold, making sure that the authors get credited. It still allowed sustainable and profitable business models: say, a company could provide administration services of Linux machines. Red Hat, SUSE, Apache, and Oracle got pretty successful doing that. The open nature of Linux distributions made sure they wouldn't become worse over time against your will. Both software and hardware were fully under your control, and if services were bad or price was too high, you could choose another service provider. The service companies had motivation to provide better services than their competitors, and they had an incentive to contribute to the OSS they maintain. The service provider was replaceable, and you controlled software.

In 2025, it is different. Once you start using a cloud provider, you depend on it, and you do not control what's running on the machines. Neither you are aware nor supposed to care what is running behind their APIs. The software becomes replaceable, but the service provider becomes irreplaceable. Incentives for the businesses to contribute to the software disappear, as well as improve the service, once you're locked in. It is, indeed, a [loophole](https://opensource.org/blog/gnu-affero-gpl-version-3-and-the-asp-loophole) in the pre-cloud era licenses: when a company installs software and charges you a subscription fee for limited access to the machine running it, they are not “distributing software”.

The [Redis drama](https://arstechnica.com/information-technology/2024/04/redis-license-change-and-forking-are-a-mess-that-everybody-can-feel-bad-about/) and the [WordPress drama](https://techcrunch.com/2025/01/12/wordpress-vs-wp-engine-drama-explained/), while both being shitshows, are symptomatic of the state of the open source. It is largely perceived as commons, as a free-for-all river where you can pump water from, and don't have a moral obligation to give back or credit authors.

[Alpine Linux is looking for](https://alpinelinux.org/posts/Seeking-Support-After-Equinix-Metal-Sunsets.html) €5,000 per month to sustain its operations. How is it possible that a Linux distribution that is Docker images, so, essentially, on every other cloud VM out there, can't get 5k when the industry is swimming in money like Scrooge McDuck is beyond my understanding.

Open source maintainers [get burnt out](https://opensauced.pizza/blog/when-open-source-maintainers-leave) [and quit](https://dev.to/tidelift/maintainer-burnout-is-real-almost-60-of-maintainers-have-quit-or-considered-quitting-maintaining-one-of-their-projects-51ma). The reasons are [plenty](https://dev.to/sapegin/why-i-quit-open-source-1n2e). Entitled users, lack of compensation, and now, when the code is proxied through LLMs for learning purposes, also lack of community recognition.

Outside the cloud, it is not much better. Open-source software wrapped in proprietary shells is ubiquitous and designed with vendor-locking in mind. Think Google Chrome, VS Code, Android, or every SaaS company running an open source stack they got for free. They cannot be encouraged to contribute back or shamed for not doing so, because you are not even aware of what exact software they are running behind their API.

It all is just another case of [tragedy of the commons](https://en.wikipedia.org/wiki/Tragedy_of_the_commons). I guess, it is also a case of us slowly but steadily giving away control for comfort. Also, it's a case of the blooming [rentier capitalism](https://en.wikipedia.org/wiki/Rentier_capitalism). Whatever it is, it looks pretty sad.

