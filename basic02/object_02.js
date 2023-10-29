// //singleton-----
// //object.create---- is constructor


//oject literals ---->


// const mysymbol=Symbol("key1")

// const jsuser={
//  name:"shivam",
//  "full name":"shivam singh",
//  [mysymbol]:"mykey1",
//  rollNo:61,
//  gmail:"shivam@google.com",
// }
// console.log(jsuser.rollNo);
// console.log(jsuser.name);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysymbol]);//symbol whow to use --imp


// jsuser.gmail="shivamsingh@google.com"
 //Object.freeze(jsuser
 // jsuser.gmail="shivam@chatgpt.com"
 // console.log(jsuser.gmail);
 // console.log(jsuser)
// jsuser.greeting=function(){
//     console.log("hello js user")
// }

// jsuser.greetingtwo=function(){
//     console.log(`hello js user this is my name ${this.name},my roll no is ${this.rollNo}`)
// }

// console.log(jsuser.greeting());
// console.log(jsuser.greetingtwo());

                        /**********object*************/


//singleton object
//const shivam=new object()//op-{}

//non singleton object
//const shivam={}//op{}

 const insta={}

 insta.id="shivam1205"
 insta.name="shivam singh rajput"
 insta.islogin=false 

//  console.log(insta);

// const regulerUser={
//     email:"shivam@gmail.com",
//     fullname:{
//         name:"shivam singh",
//         lastName:{
//             name:"singh"
//         }
//     }   ``
// }
 //console.log(regulerUser.fullname.name);

 const obj1={1:"a" ,3:"c"}
 const obj2={5:"b" ,7:"d"}

 //const obj3={obj1,obj2}
 //const obj3=Object.assign({},obj1,obj2)

 const obj3={...obj1,...obj2}//separate operator for combind with each other
 //console.log(obj3);


// array of object 

const array1=[{
    id:1,
    email:"shivam@gmail.com"
},
{
    id:1,
    email:"shivam@gmail.com"
},
{
    id:1,
    email:"shivam@gmail.com"
},
{
    id:1,
    email:"shivam@gmail.com"
}
]
// array1[1].email
// console.log(Object.keys(insta));
// console.log(Object.values(insta));
// console.log(Object.entries(insta));

// console.log(insta.hasOwnProperty('name'));


//----------------object destructuring
const course={
    courseName:"js learn free",
    price:"200",
    courseInstructor:"shivam"
    
}
course.price
console.log(course.courseName);
const{courseInstructor:is}=course//object ko ham destructural
console.log(is);

// destructuring{} ki ja rahe hai
const navebar=({company})=>{

}
navebar(company="shivamLTD")





