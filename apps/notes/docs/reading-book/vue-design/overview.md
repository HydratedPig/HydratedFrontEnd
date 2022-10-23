# 概览

## 第二章 框架设计的核心要素

### 用户开发体验

1. 良好的错误提示，尽可能地提供有用的信息给开发者，这个可以帮助开发者快速定位问题
   > vue3 中的错误实现 warn() 本质上是调用 console.warn ，当然也可以自定义 warnHandler 实现

```ts
interface AppConfig {
  errorHandler?: (
    err: unknown,
    instance: ComponentPublicInstance | null,
    info: string
  ) => void;
  warnHandler?: (
    msg: string,
    instance: ComponentPublicInstance | null,
    trace: string
  ) => void;
}
```

2. vue3 中引入了 ref，在 console.log(ref) 时不直观，为了更好的开发者体验，在现代浏览器下 ["enable custom formatters"](https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html)，便可查看到更直观的输出

### 控制代码体积以及 tree-shaking

1. dead code
   我们可以再 vue3 源码中看到大量的 `__DEV__` 变量，初读代码时我很难明白这个到底在哪赋值的...这次在看书并且结合 `rollup.config.js` 理解了下，这个值最后在 dist 文件里被替换成了 `process.env.NODE_ENV !== 'production'`，在生产打包时 `if(false) {} ` 代码块就是个 dead code ，最终在产物中被移除，这样可以在**开发环境提供警告信息，生产又不会有这些冗余的代码体积**

```js
// rollup.config.js
import replace from "@rollup/plugin-replace";

const replacements = {
  __DEV__: isBundlerESMBuild
    ? // preserve to be handled by bundlers
      `(process.env.NODE_ENV !== 'production')`
    : // hard coded dev/prod builds
      !isProduction,
};
replace({
  // @ts-ignore
  values: replacements,
  preventAssignment: true,
});
```

2. tree-shaking
   vue dist 产物中存在 `/*#__PURE__*/`，打包生产时 如果没有用到，不会被打包进生产代码中，这样可以进一步减小打包体积

```js
// rollup.config.js
export default {
  treeshake: {
    moduleSideEffects: false,
  },
};
```

> `/*#__PURE__*/ ` 是告诉 rollup.js 函数顶层调用时不会产生副作用，可以放心 tree-shaking

### 特性开关

主要为了兼容一些 vue2 方法，方便用户自定义是否需要这些特性，不需要会在 tree-shaking 中丢掉，原理和 `___DEV___` 一致

### 错误处理

这点是**用户开发体验**的延伸用户方法都会包裹一层`callWithErrorHandling(fn)`调用，避免用户过多的错误处理，当然也可以自定义 `errorHandler`

```js
export function callWithErrorHandling(fn) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err);
  }
  return res;
}
export function handleError(err) {
  const appErrorHandler = instance.appContext.config.errorHandler;
  if (appErrorHandler) {
    appErrorHandler(err);
  }
  console.error(err);
}
```

## 第三章 vue.js 3 的设计思路

Q: 什么是虚拟 DOM
A: 用来描述 UI DOM 结构的 JavaScript 对象
Q: h 函数是什么？
A: 辅助创建虚拟 DOM 的工具函数，具体定义见 [Github](https://github.com/vuejs/core/blob/main/packages/runtime-core/src/h.ts)
Q: 什么是渲染器？
A: 把虚拟 DOM 转成真实的 DOM 函数

```js
function renderer(vnode, container) {
  const el = document.createdElement(vnode.tag);
  // 处理 vnode 其他属性为 dom 真实的属性
  container.appendChild(el);
}
```

Q: 什么是组件
A: 一组 DOM 元素的封装

```js
function MyComponent() {
  return h(
    "div",
    {
      onClick: () => console.log("click div"),
    },
    ["click me"]
  );
}
function renderer(vnode, container) {
  if (typeof vnode.tag === "string") {
    mountElement(vnode, container);
  } else {
    mountComponent(vnode, container);
  }
}
function mountComponent(vnode, container) {
  const subtree = vnode.tag();
  renderer(subtree, container);
}
```
