// singleton
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


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

