/* #primitive
7types-called by value
string,number,boolern,undefined,null,symbol,bigint;
*/

//javascript is dynamics language

/* #referance type:nonprimitive;      master js -objects,-browser event 
Array,Objects,function
*/
//  const id=Symbol('1245');
// // const anotherid=Symbol('1245');
// // console.log(id===anotherid);

// // const bigNumber=255558145574445555n
// // console.log(bigNumber);

// const heros=["hello","hey","hiii"];

// let myprofile={
// //Object
// name:"shivam",
// surname:"singh",
// age:23,
// };

// //variable function
//  const myfunction=function(){
//   console.log("hello world");
//  };
//  console.log(myfunction);

//  console.log(typeof id);

//****************************************** */
//stack(primitive) 
                  //joh bhi variable declear kiaa hai uska ek copy milta hai 
// heap(nonprimitive)-refrences
                  //job bhi memory heap ke under define hoti hai yeh koi object yeh kuch bhi heap ke under chala jata hai udher se milta hai refrence- original value main change hota hai 

// let nameFull="shivam";
// let nam=nameFull;
// nam="hello";
// console.log(nam)
//console.log(nameFull)


let userone={
    gmail:"hello@google.com",
    companyId:"shivam1205",

}
let userTwo=userone

userTwo.gmail="singh@google.com";

console.log(userTwo);
console.log(userone.gmail,userTwo.gmail);
