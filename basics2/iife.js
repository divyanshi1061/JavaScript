//Immediatly invoked function expression(IIFE)
//global scope ke pollution ko hatane ke liye iife ka use kiya hai
//()()

(function one(){
    //named iife
    console.log(`Hello`);
})();

((name)=>{
    console.log(`Hello ${name}`);
    
})("Divyanshi");