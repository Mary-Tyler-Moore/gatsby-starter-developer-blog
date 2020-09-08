---
title: E-Commerce Platform Using React, GraphQL and django
tags: [react, graphql, nodejs]
date: 2020-05-23
path: blog/e-commerce-using-react
cover: ./preview.png
excerpt: Everything you need to launch your next e-commerce store.
---


### Introduction

Saleor is a rapidly-growing open source e-commerce platform that has served high-volume companies from branches like publishing and apparel since 2012. Based on Python and Django, the latest major update introduces a modular front end powered by a GraphQL API and written with React and TypeScript.

## Features
- __PWA__: End users can shop offline for better sales and shopping experiences
- __GraphQL API__: Access all data from any web or mobile client using the latest technology
- __Headless commerce__: Build mobile apps, customize storefronts and externalize processes
- __UX and UI__: Designed for a user experience that rivals even the top commercial platforms
- __Dashboard__: Administrators have total control of users, processes and products
- __Orders__: A comprehensive system for orders, dispatch and refunds
- __Cart__: Advanced payment and tax options, with full control over discounts and promotions
- __Payments__: Flexible API architecture allows integration of any payment method. Comes with Braintree support out of the box.
- :earth_asia: __Geo-adaptive__: Automatic localized pricing. Over 20 local languages. Localized checkout experience by country.
- :mag: __SEO__: Packed with features that get stores to a wider audience
- :cloud: __Cloud__: Optimized for deployments using Docker
- :bar_chart: __Analytics__: Server-side Google Analytics to report e-commerce metrics without affecting privacy


🤘 Vue.js : front-end framework
🔧 Vue-cli : standard tooling for vue.js development
🔁 Vuex : state management
💾 Firestore : cloud NoSQL Database
🏠 Firebase hosting : fast and secure web hosting
👤 Firebase authentication : for easy authentication
📱 PWA : progressive web app support
💄 Prettier : code formatting rules
🚨 Eslint : control code quality
✅ Jest : unit testing
✅ Cypress : e2e testing
🔍 Vue head : meta description per page
📄 prerender spa plugin : pages prerendering
💚 circleci : continuous integration/deployment
📦 bundlesize : control your javascript bundles sizes
App Features

👤 Google authentication
📴 Offline support (dynamic & static caching)
🆕 New version available prompt on new app deployments
➕ Add to home screen prompt for ios & android
↩️ Smart redirection for auth protected routes
✨ Products page example to demonstrate app data management with firestore and vuex
💪 Better PWA support for all browsers with PW



```typescript
import { Observable } from 'rxjs'

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
```
png)


## Installation

Saleor requires Python 3.6+, Node.js 10.0+, PostgreSQL and OS-specific dependency tools.

[See the Saleor docs](https://saleor.readthedocs.io) for step-by-step installation and deployment instructions.


## Demo

Want to see Saleor in action?

[View Storefront](http://demo.getsaleor.com/) | [View Dashboard (admin area)](http://demo.getsaleor.com/dashboard/)

Or launch the demo on a free Heroku instance.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Login credentials: `admin@example.com`/`admin`
