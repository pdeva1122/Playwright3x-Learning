# JavaScript Operators

## 1. Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `5 / 3` | `1.666...` |
| `%` | Modulus (Remainder) | `5 % 3` | `2` |
| `**` | Exponentiation (ES7) | `5 ** 3` | `125` |
| `++` | Increment | `let x = 5; x++` | `x = 6` |
| `--` | Decrement | `let x = 5; x--` | `x = 4` |

```js
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Prefix vs Postfix
let x = 5;
console.log(++x); // 6 (increment first, then return)
console.log(x++); // 6 (return first, then increment)
console.log(x);   // 7
```

---

## 2. Assignment Operators

| Operator | Example | Equivalent to |
|----------|---------|---------------|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 3` | `x = x ** 3` |
| `&=` | `x &= 3` | `x = x & 3` |
| `\|=` | `x \|= 3` | `x = x \| 3` |
| `^=` | `x ^= 3` | `x = x ^ 3` |
| `<<=` | `x <<= 3` | `x = x << 3` |
| `>>=` | `x >>= 3` | `x = x >> 3` |
| `>>>=` | `x >>>= 3` | `x = x >>> 3` |
| `&&=` | `x &&= 3` | `x = x && 3` |
| `\|\|=` | `x \|\|= 3` | `x = x \|\| 3` |
| `??=` | `x ??= 3` | `x = x ?? 3` |

```js
let x = 10;
x += 5;  // x = 15
x -= 3;  // x = 12
x *= 2;  // x = 24
x /= 4;  // x = 6
x %= 4;  // x = 2
x **= 3; // x = 8
```

---

## 3. Comparison Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal (value only) | `5 == "5"` | `true` |
| `===` | Strict equal (value + type) | `5 === "5"` | `false` |
| `!=` | Not equal (value only) | `5 != "5"` | `false` |
| `!==` | Strict not equal | `5 !== "5"` | `true` |
| `>` | Greater than | `5 > 3` | `true` |
| `<` | Less than | `5 < 3` | `false` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `5 <= 3` | `false` |
| `? :` | Ternary (conditional) | `a > b ? "yes" : "no"` | — |

```js
console.log(5 == "5");   // true  (loose equality — type coercion)
console.log(5 === "5");  // false (strict equality — no coercion)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 5);    // false

// Ternary
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

---

## 4. Logical Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `&&` | AND | `true && false` | `false` |
| `\|\|` | OR | `true \|\| false` | `true` |
| `!` | NOT | `!true` | `false` |
| `??` | Nullish Coalescing (ES11) | `null ?? "default"` | `"default"` |

```js
// AND
console.log(true && true);   // true
console.log(true && false);  // false

// OR
console.log(true || false);  // true
console.log(false || false); // false

// NOT
console.log(!true);  // false
console.log(!false); // true

// Short-circuit evaluation
let a = 0 && 10;    // 0 (short-circuits on falsy)
let b = 5 || 10;    // 5 (short-circuits on truthy)

// Nullish Coalescing — only null/undefined triggers default
let c = null ?? "default";  // "default"
let d = 0 ?? "default";     // 0 (0 is NOT nullish)
let e = "" ?? "default";    // "" (empty string is NOT nullish)
```

---

## 5. Bitwise Operators

| Operator | Name | Example | Binary | Result |
|----------|------|---------|--------|--------|
| `&` | AND | `5 & 1` | `101 & 001` | `1` |
| `\|` | OR | `5 \| 1` | `101 \| 001` | `5` |
| `^` | XOR | `5 ^ 1` | `101 ^ 001` | `4` |
| `~` | NOT | `~5` | `~0101` | `-6` |
| `<<` | Left shift | `5 << 1` | `101 << 1` | `10` |
| `>>` | Right shift (sign-propagating) | `5 >> 1` | `101 >> 1` | `2` |
| `>>>` | Zero-fill right shift | `5 >>> 1` | `101 >>> 1` | `2` |

```js
console.log(5 & 1);   // 1  (0101 & 0001 = 0001)
console.log(5 | 1);   // 5  (0101 | 0001 = 0101)
console.log(5 ^ 1);   // 4  (0101 ^ 0001 = 0100)
console.log(~5);      // -6 (~0101 = 1010, two's complement)
console.log(5 << 1);  // 10 (0101 -> 1010)
console.log(5 >> 1);  // 2  (0101 -> 0010)
```

---

## 6. String Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Concatenation | `"Hello " + "World"` | `"Hello World"` |
| `+=` | Concatenation assignment | `let s = "Hi"; s += "!"` | `"Hi!"` |

```js
let greeting = "Hello" + " " + "World";
console.log(greeting); // "Hello World"

let msg = "Good";
msg += " Morning";
console.log(msg); // "Good Morning"
```

---

## 7. Special Operators

### 7.1 Conditional (Ternary) Operator

```js
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"
```

### 7.2 Optional Chaining (`?.`) — ES11

Safely access nested properties without throwing on `null`/`undefined`.

```js
const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name);  // "Alice"
console.log(user?.address?.city);  // undefined (no error)
```

### 7.3 Nullish Coalescing (`??`) — ES11

Returns right-hand side only when left-hand side is `null` or `undefined`.

```js
let name = null;
let displayName = name ?? "Guest";
console.log(displayName); // "Guest"
```

### 7.4 `typeof` Operator

Returns a string indicating the type of operand.

```js
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (known JS quirk)
console.log(typeof []);        // "object"
console.log(typeof {});        // "object"
console.log(typeof function(){}); // "function"
```

### 7.5 `instanceof` Operator

Checks if an object is an instance of a constructor/class.

```js
let arr = [1, 2, 3];
console.log(arr instanceof Array);     // true
console.log(arr instanceof Object);    // true
console.log(arr instanceof String);    // false
```

### 7.6 `in` Operator

Checks if a property exists in an object.

```js
const car = { brand: "Toyota", year: 2020 };
console.log("brand" in car);  // true
console.log("price" in car);  // false
```

### 7.7 Spread Operator (`...`) — ES6

Expands an iterable into individual elements.

```js
// Arrays
const nums = [1, 2, 3];
const more = [...nums, 4, 5];
console.log(more); // [1, 2, 3, 4, 5]

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Rest parameter (function args)
function sum(...args) {
  return args.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### 7.8 `delete` Operator

Removes a property from an object.

```js
const person = { name: "John", age: 30 };
delete person.age;
console.log(person); // { name: "John" }
```

---

## 8. Operator Precedence (Highest to Lowest)

| Precedence | Operator(s) | Description |
|-----------|-------------|-------------|
| 18 | `()` | Grouping / function call |
| 17 | `++` `--` `!` `~` `typeof` `delete` | Unary operators |
| 16 | `**` | Exponentiation |
| 15 | `*` `/` `%` | Multiplicative |
| 14 | `+` `-` | Additive |
| 13 | `<<` `>>` `>>>` | Bitwise shift |
| 12 | `<` `<=` `>` `>=` `in` `instanceof` | Relational |
| 11 | `==` `!=` `===` `!==` | Equality |
| 10 | `&` | Bitwise AND |
| 9 | `^` | Bitwise XOR |
| 8 | `\|` | Bitwise OR |
| 7 | `&&` | Logical AND |
| 6 | `\|\|` | Logical OR |
| 5 | `??` | Nullish coalescing |
| 4 | `? :` | Ternary |
| 3 | `=` `+=` `-=` etc. | Assignment |
| 2 | `...` | Spread / rest |
| 1 | `,` | Comma |

> **Rule of thumb**: Use parentheses `()` when precedence isn't obvious — it makes code clearer.

---

## Quick Reference — One-liner Examples

```js
// Arithmetic
console.log(2 + 3, 10 - 4, 6 * 7, 15 / 4, 17 % 5, 2 ** 4);

// Assignment
let n = 10; n += 5; n *= 2; console.log(n); // 30

// Comparison
console.log(5 == "5", 5 === "5", 10 > 5, 10 <= 5);

// Logical
console.log(true && false, true || false, !true);

// Ternary
console.log(10 > 5 ? "yes" : "no");

// Optional chaining
const obj = { a: { b: "found" } };
console.log(obj?.a?.b, obj?.x?.y ?? "N/A");

// Spread
console.log([... [1, 2], 3, 4]);
```
