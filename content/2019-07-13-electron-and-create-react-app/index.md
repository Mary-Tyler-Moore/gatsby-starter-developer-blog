---
title: How to Build an Electron App Using create-react-app.
date: 2019-04-03
tags: [javascript, react, nodejs]
path: blog/build-electron-app-with-react
cover: ./preview.png
excerpt: Build a fantastic Electron app from scratch using create-react-app.
---
I recently built an [Electron](https://electronjs.org/ "ElectronJS site") app using [create-react-app](https://github.com/facebook/create-react-app "create-react-app repository"). I didn’t need to muck about with Webpack, or “eject” my app, either. I’ll walk you through how I accomplished this.

I will be adding content to this blog on Github using markdown:

```typescript
import { Observable } from 'rxjs';

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

## Pull versus Push

*Pull* and *Push* are two different protocols that describe how a data *Producer* can communicate with a data *Consumer*.

**What is Pull?** In Pull systems, the Consumer determines when it receives data from the data Producer. The Producer itself is unaware of when the data will be delivered to the Consumer.
