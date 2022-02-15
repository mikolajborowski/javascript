//Type of functions in JavaScript 

//Mapping
const sum = (a, b) => a + b

//Procedure
const update = (data) => {some code that updates db}

// Input / Output
const showMessage = (message) {some code that shows some message on users screen}

//Pure function - function that is pure, that isnt update some variables, it only returns needed vaules
let sum = 100;
const sumFunct = (a, b) => a += b;
sumFunct(sum, 100) //It will not update sum, it will only return 200
// now if i need to update sum i can use it like this:
sum = sumFunct(sum, 100)
//Idempotent function - function that returns the same result for the same arguments
//Referential transparency - whole body of function can be changed for som value, for example in case of testing
//Pure functions should not be used in procedure functions 
