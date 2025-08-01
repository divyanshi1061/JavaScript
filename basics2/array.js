const myArray=[1,2,3,4,5,]

const arr= new Array(1,2,3,4)
// console.log(arr[0]);
 
arr.push(6)
// console.log(arr);
arr.pop()
// console.log(arr)


// ===================

const marvel_heros=["throw","hulk","ironman","spiderman"]
const dc_heros=["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// const combine=marvel_heros.concat(dc_heros)
// console.log(combine);

const all_combine=[...marvel_heros,...dc_heros];   // mostly used

console.log(all_combine);

