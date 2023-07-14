/* --------------------------------- 响应式 V1 --------------------------------- */
let effect: (() => void) | undefined = undefined;
function proxyObj(obj: Record<string, any>) {
  const dep: (() => void)[] = [];
  return new Proxy(obj, {
    get(t, k) {
      if (effect) dep.push(effect);
      return Reflect.get(t, k);
    },
    set(t, k, v, rec) {
      dep.forEach((d) => d());
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
const obj = proxyObj({ text: '1' });
effectHook(
  () => [obj.text],
  () => console.log('setText', obj.text)
);

export default {};
