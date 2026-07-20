# JavaScript Data Types

JS has **8 data types** — 7 Primitive and 1 Non-Primitive (Object).

---

## 1. String
Text wrapped in quotes — single, double, or backticks (template literals).

```js
let name = "Prashanth";
let greet = 'Hello';
let template = `Hi ${name}`;  // "Hi Prashanth"
```

## 2. Number
Integers, decimals, and special values like `NaN` and `Infinity`.

```js
let age = 25;
let price = 99.99;
let notANumber = "abc" / 2;   // NaN
let infinity = 1 / 0;         // Infinity
```

## 3. Boolean
Only two values: `true` or `false`.

```js
let isLoggedIn = true;
let isAdult = age >= 18;   // evaluates to true/false
```

## 4. Undefined
Variable declared but **no value assigned**. JS does this automatically.

```js
let something;
console.log(something);  // undefined
```

## 5. Null
**Intentionally empty** — you set it yourself to mean "nothing".

```js
let emptyValue = null;
```

> **undefined vs null:** `undefined` = JS saying "not assigned yet". `null` = you saying "I'm clearing this value."

## 6. BigInt
For numbers larger than `Number.MAX_SAFE_INTEGER (9007199254740991)`. Add `n` at the end.

```js
let bigNumber = 123456789012345678901234567890n;
```

## 7. Symbol
Creates a **unique identifier** — even with the same description, each Symbol is different.

```js
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);  // false
```

## 8. Object (Non-Primitive)
Collections of key-value pairs. Arrays and Functions are also Objects.

```js
let person = { name: "Prashanth", age: 25 };     // Object
let fruits = ["Apple", "Banana"];                  // Array (typeof = "object")
function sayHi() { return "Hello"; }                // Function (typeof = "function")
```

---

## typeof Operator

Check the type of any value:

```js
typeof "text"        // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object"   ← JS bug (it's actually null)
typeof 123n          // "bigint"
typeof Symbol()      // "symbol"
typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "function"
```

---

## Primitive vs Non-Primitive (Key Concept)

| | Primitive | Non-Primitive (Object) |
|---|---|---|
| **Storage** | By value (copied) | By reference (shared) |
| **Immutable?** | Yes | No |
| **Types** | String, Number, Boolean, Undefined, Null, BigInt, Symbol | Object, Array, Function |

### Primitive — copies the value:
```js
let a = 10;
let b = a;   // b gets its own copy of 10
b = 20;
console.log(a);  // 10 (unchanged)
```

### Object — copies the reference:
```js
let obj1 = { value: 10 };
let obj2 = obj1;      // obj2 points to the SAME object
obj2.value = 20;
console.log(obj1.value);  // 20 (changed — both point to same object)
```
