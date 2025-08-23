const user={
    username:"Divyanshi",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }}
    // user.welcomeMessage()
    // user.username="Sam"
    // user.welcomeMessage()
    //console.log(this); //it will give empty set because this is outside scope)
    
    // function one()
    //    { console.log(this);}
    // one();

    //arrow Functions
const add= (num1,num2)=>{
return num1+num2
}
//implicit return
const add2= (num1,num2)=> num1+num2

console.log(add(3,4))
console.log(add2(4,4))