function sayMyname(){
    console.log("Hello");
    
}
// sayMyname()

function addTwonumbers(num1,num2){
    console.log(num1+num2);
    
}
// addTwonumbers(12,13)
function loginUser(username)
{
   return `Welcome ,${username}`
}
console.log(loginUser("Divyanshi"));
 
function calculateCartPrice(...num1)
{
return num1;
}
console.log(calculateCartPrice(200,300,400));

const user={
    username:"Divyanshi",
    Price:100
}
function handleObject(anyobject)
{
console.log(`Hello ${anyobject.username} your price is ${anyobject.Price}`)
}
handleObject(user)
handleObject({
    username:"Ridhi",
    Price:499
})