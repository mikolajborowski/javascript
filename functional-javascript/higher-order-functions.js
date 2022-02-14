const songs = [
    { author: 'Jan', duration: 200, released: 1998 },
    { author: 'Mikolaj', duration: 230, released: 1988 }
];

// Ok, code
const reduce = (reducer, initial, arr) => {
    let result = initial;
    for(let i = 0, { length } = arr; i < length; i++){
        result = reducer(result, arr[i]) ? result : arr[i];
    }
    return result;
}

const filter = (reducer, arr) => reduce(reducer, [], arr)
const shortest = filter((prev, next) => prev.duration < next.duration, songs)
const longest = filter((prev, next) => prev.duration > next.duration, songs)

//Better solution
const shortestReducer = (prev, next) => prev.duration < next.duration ? prev : next;
const shortest = songs.reduce(shortestReducer, songs);

//Info
// HOF - It's beneficial because you are writing reusable code.
// Imperative code - step by step, code that use for functions etc, you can easly make mistake.
// First class function - function as a variable example: const f = n => n ** 3.
// Composition - passing function as an argument of another function.