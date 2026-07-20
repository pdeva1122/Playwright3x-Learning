# Ternary Operator

## Syntax
```
condition ? value_if_true : value_if_false
```

## Basic Usage (from Ternary.js)
```js
let age = 17;
let canGo = age >= 18 ? "Yes" : "No";
//                17 >= 18 → false → returns "No"
```

### Interview Examples:
- **API Status Check:**
  ```js
  actualStatusCode === expectedStatusCode ? "Test Passed" : "Test Failed"
  // 200 === 200 → true → returns "Test Passed"
  ```
- **Environment URL:**
  ```js
  environment === "production" ? "https://api.production.com" : "https://api.staging.com"
  // "staging" === "production" → false → returns "https://api.staging.com"
  ```
- **SLA Validation:**
  ```js
  responseTime <= sla ? "SLA Met" : "SLA Not Met"
  // 1500 <= 1000 → false → returns "SLA Not Met"
  ```


## Nested Ternary (from NestedTernary.js)
```
condition1 ? expression1 : condition2 ? expression2 : expression3
```

### Interview Examples:
- **HTTP Status Categories (statusCode = 404):**
  ```js
  let category =
    statusCode < 300 ? "Success" :       // 404 < 300 → false, move next
    statusCode < 400 ? "Redirect" :       // 404 < 400 → false, move next
    statusCode < 500 ? "Client Error" :   // 404 < 500 → true → returns "Client Error"
    "Server Error";
  ```
- **Temperature Feel (temp = 35):**
  ```js
  let feel = (temp >= 40) ? "Very Hot" :   // 35 >= 40 → false
             (temp >= 35) ? "Hot" :        // 35 >= 35 → true → returns "Hot"
             (temp >= 10) ? "Cool" : "Cold";
  ```
