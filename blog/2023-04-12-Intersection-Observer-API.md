---
slug: IntersectionObserver
title: Intersection Observer API
authors: Zaoei
tags: [performance]
---

<!--truncate-->

# **Intersection Observer API**

[Intersection Observer API - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

## 实现一个组件可视化懒加载

```
import React, { useRef, useState } from 'react';
import { useEffectOnce } from 'react-use';
import { useUniqueId } from '*'; // 唯一值获取，自定义

export interface Props {
  children: React.ReactNode | (({ isInView }: { isInView: boolean }) => React.ReactNode);
  onLoad?: () => void;
}

export function LazyLoader({ children, onLoad }: Props) {
  const id = useUniqueId();
  const [loaded, setLoaded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffectOnce(() => {
		// 注册进入可视区域的触发事件
    LazyLoader.addCallback(id, (entry) => {
      if (!loaded && entry.isIntersecting) {
        setLoaded(true);
        onLoad?.(); // 执行初始化相关的交互
      }
    });

    const wrapperEl = wrapperRef.current;

    if (wrapperEl) {
      LazyLoader.observer.observe(wrapperEl); // 开始监听
    }

    return () => {
      delete LazyLoader.callbacks[id];
      wrapperEl && LazyLoader.observer.unobserve(wrapperEl);
      if (Object.keys(LazyLoader.callbacks).length === 0) {
        LazyLoader.observer.disconnect();
      }
    };
  });

  return (
    <div id={id} ref={wrapperRef} >
      {loaded && children}
    </div>
  );
}

LazyLoader.callbacks = {} as Record<string, (e: IntersectionObserverEntry) => void>;
LazyLoader.addCallback = (id: string, c: (e: IntersectionObserverEntry) => void) => (LazyLoader.callbacks[id] = c);
LazyLoader.observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry) => {
    for (const entry of entries) {
      LazyLoader.callbacks[entry.target.id](entry);
    }
  },
  { rootMargin: '100px' }
);
```

使用

```jsx
<LazyLoader onLoad={this.onPanelLoad}>
  <Panel />
</LazyLoader>
```
