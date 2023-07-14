/* ----------------------------------- 改进 ----------------------------------- */
let effect: (() => void) | undefined = undefined;
function proxyObj(obj: Record<string, any>) {
  const dep: (() => void)[] = [];
  return new Proxy(obj, {
    get(t, k) {
      if (effect) dep.push(effect);
      return Reflect.get(t, k);
    },
    set(t, k, v, rec) {
      Promise.resolve().then(() => dep.forEach((d) => d()));
      return Reflect.set(t, k, v, rec);
    },
  });
}
function effectHook(watchers: () => any[], fn: () => void) {
  effect = fn;
  watchers();
  effect = undefined;
}

/** test */
const objV2 = proxyObj({ text: '1' });
effectHook(
  () => [objV2.text],
  () => console.log('setText', objV2.text)
);

export default {};
