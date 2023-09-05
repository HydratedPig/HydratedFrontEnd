# 基本类型

## Undefined

primitive value used when a variable has not been assigned a value

`undefined` 是当其他变量未被赋值是使用的基本类型，即声明但没有初始化的变量其值默认为 `undefined`，有个有趣的[对象](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec)，不过 [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/all) 上已经显示下面这个是个废案了

```js
typeof document.all === "undefined";
```

## Null

primitive value that represents the intentional absence of any object value

空对象指针，没啥好说的，我不是很喜欢这个值，在解构赋值时直接原地爆炸:）

## [Boolean](./Object.md#boolean)

The Boolean type represents a logical entity having two values, called true and false.

拢共俩值，表示真假的，`Boolean()` 构造函数可以把一切转成 `boolean` 值，[转换规则](https://tc39.es/ecma262/#sec-toboolean)自己找，找完后你会发现非常 [AMAZING](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-to-boolean) 啊

```js
// tips
const filteredArr = [
  0,
  -0,
  1,
  2e7,
  0xaf,
  Infinity,
  -Infinity,
  NaN,
  0n,
  1n,
  9007199254740991n,
  true,
  false,
  "",
  "string",
  undefined,
  null,
  {},
  [],
  Symbol(false),
  new Map(),
  new WeakMap(),
  new Set(),
  new WeakSet(),
  function () {},
  () => {},
  document.all,
].filter(Boolean);
// [1, 20000000, 175, Infinity, -Infinity, 1n, 9007199254740991n, true, 'string', {…}, Array(0), Symbol(false), Map(0), WeakMap, Set(0), WeakSet, ƒ, ƒ]
```

## [Number](./Object.md#number)

primitive value corresponding to a double-precision 64-bit binary format IEEE 754-2019 value

盲点：

1. IEEE 754 爱你哟 `0.1 + 0.2 = ?`
2. 八进制？什么八进制？严格模式下不给用，不去了解，拜拜了您内：）
3. 十六进制数学操作和十进制一致，不做区分 `0xfF === 255`
4. `Javascript` 里是有 `-0` 和 `+0` 的哦
5. `Javascript` 是支持科学计数法的: `1e6 === 1000000`
6. 浮点数只能表示到小数点后 17 位
7. `Object.is(NaN,NaN) === true`
8. `Object.is(+0, -0) === false`
9. `NaN` 和任何数都不相等包括自己
10. [`Number.isNaN`](https://tc39.es/ecma262/#sec-number.isnan) vs [`isNaN`](https://tc39.es/ecma262/#sec-isnan-number)，前者是判断数字是否是 `NaN`(即如果不是数字一定返回 `false`) 后者是判断是否是 `NaN`(即先转换为数字再判断是否为 `NaN`)
11. [`Number(value)`转换规则](https://tc39.es/ecma262/#sec-tonumeric)，[`parseFloat(string)`转换规则](https://tc39.es/ecma262/#sec-parsefloat-string)，[`parseInt(string, radix)`转换规则](https://tc39.es/ecma262/#sec-parsefloat-string)自己找[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)了解，我并不想了解，别问我，我不会，下面那几个我是从[高程](https://book.douban.com/subject/35175321/)上抄的，没过脑子，规则我是真的不会`orz`

```js
const num1 = Number("Hello world!"); // NaN
const num2 = Number(""); // 0
const num3 = Number("000011"); // 11
const num4 = Number(true); // 1
const numThrowError = Number(1n); // chromium 不会报错，其余浏览器会报错，google 没按规范来，不知道以后会不会倒逼规范(https://tc39.es/ecma262/#sec-tonumber)
// 对于对象类型，会先转为基本类型再做 number 转换 (https://tc39.es/ecma262/#sec-tonumber)
// 数组
const numArr = Number([]); // 0
const numArrL1 = Number([1234]); // 1234
const numArrLN = Number([1,2,3,...]); // NaN
// 对象
const obj = {};
const numObj = Number(obj) // NaN
obj.toString = () => ({});
Number(obj); // throw Error
obj.toString = () => "1";
const numObj2Str = Number(obj); // 1
obj.valueOf = () => "2";
const numObjValueOf = Number(obj); // 2
obj[Symbol.toPrimitive] = () => ({});
Number(obj); // throw Error
obj[Symbol.toPrimitive] = () => "3";
const numObj2Prim = Number(obj); // 3

// parseInt、parseFloat 在对象类型情况下同 Number
const intHex = parseInt("0xAF", 16); // 175
const int10 = parseInt("10", 2); // 2，按二进制解析
// 以后骂人，你是 parseInt(false, 16) 么（雾）
const CCL = parseInt(false, 16);

const f1 = parseFloat("1234blue"); // 1234，按整数解析
const f2 = parseFloat("0xA"); // 0
const f3 = parseFloat("22.5"); // 22.5
const f4 = parseFloat("22.34.5"); // 22.34
const f5 = parseFloat("0908.5"); // 908.5
const f6 = parseFloat("3.125e7"); // 31250000
```

12. [操作符](https://tc39.es/ecma262/#sec-numeric-types)，啥啥啥，这写得都是啥
13. `NaN` 在 `Number.prototype.toExponential/toFixed/toLocalString/toString/toPrecision`中作为参数时都会被当做 0 处理，同样在`Uint32Array/Unit16Array/Uint8Array/int32Array/int16Array/int8Array`中也是一样，不过 MDN 当中说的整数转换我没太懂除了这些还有哪些会做等同于 0 的处理，[ECMA262](https://tc39.es/ecma262/#sec-tointegerorinfinity)倒是找到一堆，但是我还是不清楚那些定义是用在哪里的
14. `Uint32Array/Unit16Array/Uint8Array/int32Array/int16Array/int8Array` 里面可以随便塞数字，最后都会被**尝试**转化为整形，要考虑越界问题

```js
new Int8Array([1, [], {}, function () {}, NaN, 257, -257]);
// Int8Array(7) [1, 0, 0, 0, 0, 1, -1, buffer: ArrayBuffer(7), byteLength: 7, byteOffset: 0, length: 7, Symbol(Symbol.toStringTag): 'Int8Array']
const obj = {};
obj[Symbol.toPrimitive] = () => ({});
new Int8Array([obj]); // Uncaught TypeError: Cannot convert object to primitive value
```

## [BigInt](./Object.md#bigint)

反正我用不到，嘿嘿 😋

1. 大数
2. `1 == 1n` but `1 !== 1n`
3. `JSON.stringify()`序列化会报错，要手动转化成数字，或者改写 `BigInt.prototype.toJSON`
4. `Math` 方法不能用
5. 与 `Number` 的转换可能会丢失精度

## [String](./Object.md#string)

primitive value that is a finite ordered sequence of zero or more 16-bit unsigned integer values

> A String value is a member of the String type. Each integer value in the sequence usually represents a single 16-bit unit of UTF-16 text. However, ECMAScript does not place any restrictions or requirements on the values except that they must be 16-bit unsigned integers.

1. 每个字符都是 16 位 unicode
2. 字符串是不可变的，任意字符串在更改后都是新的字符串了
3. [字符串转换](https://tc39.es/ecma262/#sec-tostring)规则不懂啊，`symbol`转不了字符串，`BigInt` 可以转字符串，对象类型和数字比较类似，都会先调用 `Symbol.toPrimitive` 方法，区别是，转换字符串如果没有找到 `toPrimitive` 直接调用 `toString` 方法，最后再找 `valueOf`

```js
const obj = {};
obj.valueOf = () => "valueOfStr";
const strObj = "" + obj; // [object Object]
obj.toString = () => ({});
const strObj2str = "" + obj; // valueOfStr;
obj[Symbol.toPrimitive] = () => "toPrimitiveStr";
const strObj2Prim = "" + obj; // toPrimitiveStr
obj[Symbol.toPrimitive] = () => ({});
const strObj2Prim = "" + obj; // Uncaught TypeError: Cannot convert object to primitive value
```

4. 模板字面量，大概就是定义字符串更爽了，没啥好说的，应该没有人没用过了吧

```js
const str = `first line
second line
third line
end line`;
const v1 = "v1";
const oldInsert = "a" + v1 + "end";
const newInsert = `a${v1}end`;
```

5. 模板字面量标签函数，`我很喜欢前端同学的一句话：啊？`，抄，都可以抄，我又抄了[高程](https://book.douban.com/subject/35175321/)的一段代码

```js
const a = 6;
const b = 9;
function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
  console.log(strings);
  console.log(aValExpression);
  console.log(bValExpression);
  console.log(sumExpression);
  return "foobar";
}
const untaggedResult = `${a} + ${b} = ${a + b}`;
const taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
// ['', ' + ', ' = ', '', raw: Array(4)]
// 6
// 9
// 15
console.log(untaggedResult); // "6 + 9 = 15"
console.log(taggedResult); // "foobar"
```

6. [`String.raw(strings, ...substitutions)`](https://tc39.es/ecma262/#sec-string.raw)，同上，唯一一个内置的标签函数
   > strings 是一个格式正确的模板字符串数组对象，例如 { raw: ['foo', 'bar', 'baz'] }，应该是一个具有 raw 属性的对象，其值是一个类数组的字符串对象。如果 `raw` 是个类数组，会被 `String.raw` [拆成数组](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw)的，当然自定义的字面量标签函数看你需求，你的标签函数你做主

## [Symbol](./Object.md#symbol)

primitive value that represents a unique, non-String Object property key

> Each possible Symbol value is unique and immutable.

1. 每个 symbol 都有一个叫做 `[[Description]]` 的关联值，这个关联值可以是 `undefined` 或者 `string`

```js
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2); // false

const symS1 = Symbol("s");
const symS2 = Symbol("s");
console.log(symS1 === symS2); // false
```

2. 不可以作为构造函数初始化

```js
new Symbol(); // Uncaught TypeError: Symbol is not a constructor
```

3. [`Symbol.for`](https://tc39.es/ecma262/#sec-symbol.for) 全局 `Symbol` 注册表，可以重用 `Symbol` 变量

```js
const sym1 = Symbol.for("symbol");
const sym2 = Symbol.for("symbol");
console.log(sym1 === sym2); // true
```

4. [Well-known Symbols](https://tc39.es/ecma262/#table-well-known-symbols)

- `@@asyncIterator`

> 对象异步迭代器的键名，与 `for-await-of` 联合使用

```js
class Emitter {
  constructor(max) {
    this.max = max;
    this.asyncIdx = 0;
  }

  async *[Symbol.asyncIterator]() {
    while (this.asyncIdx < this.max) {
      yield new Promise((resolve) => resolve(this.asyncIdx++));
    }
  }
}
async function asyncCount() {
  let emitter = new Emitter(5);
  for await (const x of emitter) {
    console.log(x);
  }
}
asyncCount();
// 0
// 1
// 2
// 3
// 4
```

- `@@hasInstance`

> 这个方法决定了一个对象是否是构造函数的实例，`instanceof` 首先会调用构造函数的这个方法

```js
class Bar {}
class Baz extends Bar {
  static [Symbol.hasInstance]() {
    return false;
  }
}

let b = new Baz();
console.log(Bar[Symbol.hasInstance](b)); // true
console.log(b instanceof Bar); // true
console.log(Baz[Symbol.hasInstance](b)); // false
console.log(b instanceof Baz); // false
```

- `@@isConcatSpreadable`

> 如果某对象`[Symbol.isConcatSpreadable]`为真值，在 `Array.prototype.concat` 的调用中该对象将会作为数组被拍平使用

```js
[].concat({ 1: 0, length: 2 });
// [{…}]
[].concat({ 1: 0, length: 2, [Symbol.isConcatSpreadable]: true });
// (2) [empty, 0]
```

- `@@iterator`

> 一个返回默认迭代器的方法

```js
class Emitter {
  constructor(max) {
    this.max = max;
    this.idx = 0;
  }
  *[Symbol.iterator]() {
    while (this.idx < this.max) {
      yield this.idx++;
    }
  }
}
function count() {
  let emitter = new Emitter(5);
  for (const x of emitter) {
    console.log(x);
  }
}
count();
// 0
// 1
// 2
// 3
// 4
```

- `@@match(target)`

> 正则表达式默认实现了改方法，被 `String.prototype.match` 调用时会使用该方法

```js
class FooMatcher {
  static [Symbol.match](target) {
    return target.includes("foo");
  }
}
console.log("foobar".match(FooMatcher)); // true
console.log("barbaz".match(FooMatcher)); // false
```

- `@@matchAll(target)`

> 迭代器方法，和 `@@match` 类似，被 `String.prototype.matchAll` 调用时会使用该方法

- `@@replace(target, replacement)`

> 和 `@@match` 类似，被 `String.prototype.replace` 调用时会使用该方法

- `@@search(target)`

> 和 `@@match` 类似，被 `String.prototype.search` 调用时会使用该方法

- `@@species`

> 值属性，代表作为创建派生对象的构造函数，我等屁民用不到

```js
class Baz extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

let baz = new Baz();
console.log(baz instanceof Array); // true
console.log(baz instanceof Baz); // true
console.log(baz); // Baz []
baz = baz.concat("baz");
console.log(baz instanceof Array); // true
console.log(baz instanceof Baz); // false
console.log(baz); // ['baz']
```

- `@@split(target)`

> 和 `@@match` 类似，被 `String.prototype.split` 调用时会使用该方法

- `@@toPrimitive`

> 定义实例如何返回原始值

- `@@toStringTag`

> 控制对象 `Object.prototype.toString` 的字符串描述

```js
class Bar {
  [Symbol.toStringTag] = "Bar";
}
let bar = new Bar();
console.log(bar); // Bar {Symbol(Symbol.toStringTag): 'Bar'}
console.log(bar.toString()); // [object Bar]
console.log(bar[Symbol.toStringTag]); // Bar
```

- `@@unscopables`

> 不做了解，跟 `with` 一起使用的，严格模式不能用 with，略
