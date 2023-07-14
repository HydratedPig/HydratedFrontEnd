/**
 * Feature - confidence
 */
interface DepEffect {
  (): void;
  deps: Set<any>[];
}
let activeEffect: DepEffect | undefined = undefined;
const globalBucket = new WeakMap<Record<string, any>, Map<string, Set<any>>>();
function track<T extends Record<string, any>>(target: T, prop: string) {
  if (!activeEffect) return;
  const depMap = globalBucket.get(target) || new Map();
  const deps = depMap.get(prop) || new Set();
  deps.add(activeEffect);
  depMap.set(prop, deps);
  globalBucket.set(target, depMap);
  activeEffect.deps.push(deps);
}
function trigger<T extends Record<string, any>>(target: T, prop: string) {
  const depMap = globalBucket.get(target);
  if (!depMap) return;
  const deps = depMap.get(prop);
  deps && new Set(deps).forEach((effect) => effect());
}
function proxyObj<T extends Record<string, any>>(obj: T) {
  return new Proxy(obj, {
    get(target, prop: string) {
      track(target, prop);
      return Reflect.get(target, prop);
    },
    set(target, prop: string, value, receive) {
      const res = Reflect.set(target, prop, value, receive);
      trigger(target, prop);
      return res;
    },
  });
}
function cleanup(effect: DepEffect) {
  // 去除所有响应依赖，并删除这些响应函数
  for (const i of effect.deps) {
    i.delete(effect);
  }
  // 对于 dep 非空，但是已经没有和本 effect 相关的了，所以全量清除
  effect.deps.length = 0;
}
function effectHook(fn: () => void) {
  const effect: DepEffect = () => {
    cleanup(effect);
    activeEffect = effect;
    fn();
    activeEffect = undefined;
  };
  effect.deps = [];
  effect();
}

/** test */
const objV2 = proxyObj({ text: '1', ok: false, otherText: 'otherText' });
effectHook(() => {
  if (objV2.ok) {
    console.log('set::Ok', objV2.ok);
  } else {
    console.log('set::Text', objV2.text);
  }
});

objV2.text = '2';
objV2.otherText = '3';
objV2.ok = true;
objV2.text = 'next text';
objV2.ok = false;
objV2.text = 'done';

export default {};
