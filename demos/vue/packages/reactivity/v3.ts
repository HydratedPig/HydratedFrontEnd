/* ----------------------------------- 改进 V3 ----------------------------------- */
/**
 * new: dep 执行 不在放到微任务里，改为同步执行，且防止 obj 其他值设置的时候触发 effect
 * weakness: 注册函数的会导致一次不必要的执行
 */
let activeEffect: (() => void) | undefined = undefined;
function proxyObj(obj: Record<string, any>) {
  const depMap: Map<string, (() => void)[]> = new Map();
  return new Proxy(obj, {
    get(t, k: string) {
      if (activeEffect) {
        let dep = depMap.get(k);
        if (dep) {
          dep.push(activeEffect);
        } else {
          dep = [activeEffect];
        }
        depMap.set(k, dep);
      }
      return Reflect.get(t, k);
    },
    set(t, k: string, v, rec) {
      const res = Reflect.set(t, k, v, rec);
      const dep = depMap.get(k);
      dep?.forEach((d) => d());
      return res;
    },
  });
}
function effectHook(fn: () => void) {
  activeEffect = fn;
  fn();
  activeEffect = undefined;
}

/** test */
const objV2 = proxyObj({ text: '1' });
effectHook(() => console.log('setText', objV2.text));

objV2.text = '2';
objV2.otherText = '3';

export default {};
