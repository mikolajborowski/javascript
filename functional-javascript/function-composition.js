//Function composition is passing one pure function to othere to create completly new function
const value = 5;
//normal code
const doubleAndIncrement = (x) => x * 2 + 1
doubleAndIncrement(value)
//function composition 
const double = (y) => y * 2
const add = (x) => x + 1

add(double(value))

//Multiple functions
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x)
const result = compose(add, double)
result(value);