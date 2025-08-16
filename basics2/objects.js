
// object literals
const JsUser={
    name:"Divyanshi",
    "full name":"Divynashi Khandelwal",
    age:21,
    email:"abc@gmail.com"
}
// console.log(JsUser["full name"]);
JsUser.email="divi2@gamil.com"
// Object.freeze(JsUser);
JsUser.email="abc@gmail.com"
// console.log(JsUser);

JsUser.greeting=function()
{
console.log("Hello JS User");
}

JsUser.greetingTwo=function()
{
console.log(`Hello JS User ${this.name}`);
}


// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



//======= singleton object =======

const tinderUser= new Object()
tinderUser.id="123abc"
tinderUser.name="Divyanshi Khandelwal"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUSer={
    email:"divi@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Divyanshi",
            lastName:"Khandelwal"
        }
    }
}

// console.log(regularUSer.fullName.userFullName.firstName);

// const obj3= Object.assign({},regularUSer,tinderUser)
// console.log(obj3);

const obj3= {...regularUSer,...tinderUser}
// console.log(obj3);
/*
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"))
*/


const course={
    courseName:"Java Script Tutorial",
    price:"Rs1999",
    courseTutor:"Hitesh"
}
const{courseTutor}=course

console.log(courseTutor);
