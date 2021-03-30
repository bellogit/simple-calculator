A function in another function can either be a returned value or an argument.

See the example below:

```js
const calcSum = (a, b) => {
    return a + b;
};

const sum = calcSum(23, 12);
console.log(sum); // 35

const higherFunc = cost => {
    return `It costs ${cost} dollars.`;
};

console.log( higherFunc(sum) ); // function as an argument
// It costs 35 dollars.
```
---
### Functions as Data
A function can get assigned to a variable. 

See the example below:
```js
const calcSum = (a, b) => {
    return a + b;
};

const sum = calcSum;
console.log(sum(12, 23)) // 35
```
In the example above, the address in memory of both `calcSum` and `sum` is the same. We only changed the function name, `calcSum` to `sum` as a variable.

---
### Functions as parameters
Higher-order functions can accept functions as parameters. Such parameters are called **callback functions**.

See the example below:

```js
const add = (num1, num2) => {
    return num1 + num2;
};

const mult = (num1, num2) => {
    return num1 * num2;
};

const calculator = (num1, num2, operator) => {
    return operator(num1, num2);
};

console.log( calculator(5, 7, add) ); // 12
console.log( calculator(5, 7, mult) ); // 35
```
In the example above, the parameter `operator` is defined as `add` and `mult` function but also returned as a value, `return operator(num1, num2)`. The function (`operator`) is called a **callback function**.

The function `operator` was called back twice to `add` and `mult`.

```js
console.log( calculator(5, 7, add) ); // 12
console.log( calculator(5, 7, mult) ); // 35
```

---
#### Functions as arguments
Functions can be arguments to other functions.

See the example below:

```js
const calcSum = (a, b) => {
    return a + b;
};

const sum = calcSum(23, 12);
console.log(sum); // 35

const higherFunc = cost => {
    return `It costs ${cost} dollars.`;
};

console.log( higherFunc(sum) ); // function as an argument
// It costs 35 dollars.
```

In the example above, `sum` is a variable that refers to a calling function `calcSum(23, 12)`. 

Since `sum` is a returned value, it can be treated as an argument in a higher-order function `higherFunc(sum)`.

**Happy coding!**

---
[![Buy me a Coffee](https://res.cloudinary.com/bizstak/image/upload/v1610317510/ko-fi-trans_fr3su4.png)](https://www.buymeacoffee.com/bellotech)

---
### TechStack | Bluehost
- Get a website with a free domain name for 1st year and a free **SSL** certificate.
- 1-click WordPress install and 24/7 support.
- Starting at $3.95/month.
-  30-Day Money-Back Guarantee.

[![Buy me a Coffee](https://bluehost-cdn.com/media/partner/images/belloosagienoah/430x288/430x288PW.png)](https://www.bluehost.com/track/belloosagienoah/)