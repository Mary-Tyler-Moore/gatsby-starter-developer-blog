---
title: Turn a Failing Website into an A+ Progressive Web Application
tags: [lighthouse, pwa, wcag]
date: 2020-05-21
path: blog/perfect-score
cover: ./preview.png
excerpt: How to achieve a perfect Lighthouse score.
---

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
