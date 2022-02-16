//If one function store some variable, and pass it to other function, the othere function can change state in 
//first function becouse of shared state. Thats unsafe.

//If i pass some array to othere function and i know the othere function will interfere with array
//i need to create new array using sprade operator:
const newArr = [...pasedArr]; //shallow 
//For deep copy i can use ramda, and its method caled copy 

//Also i can use freez property on objects 
const account = Object.freeze({ balance: 2 });
//only works on top-level properties, for otheres i can use immutable-js package