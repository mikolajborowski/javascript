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
//https://javascript.info/currying-partials
//For example I have a function that takes 3 arguments. And my situation is that the first argument is always the same, so I can 
//curry the function, then create a new function by setting first function with first argument with a fixed value, and then
//i have completely new function that needs only 2 arguments, because first one is fixed and always be the same