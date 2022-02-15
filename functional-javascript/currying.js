function multiply(multiplyer, value) {
    return value * multiplyer;
}
const numbers = [33, 44, 44]
//Unary function - function that gets one argument
//Binary function - function that gets 2 arguments
//Currying
const unaryCurrying = (x) => (y) => x + y;
unaryCurrying(1)(2);

//More practical - package ramda - https://ramdajs.com/
const curriedMultiply = curry(multiply);
numbers.map(curriedMultiply(2));

//Strict currying vs loose currying
curriedMultiply(2, 5);
curriedMultiply(2)(5);

// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// Currying doesn’t call a function. It just transforms it.