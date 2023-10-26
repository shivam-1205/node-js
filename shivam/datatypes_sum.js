/* #primitive
7types-called by value
string,number,boolern,undefined,null,symbol,bigint;
*/

//javascript is dynamics language

/* #referance type:nonprimitive;      master js -objects,-browser event 
Array,Objects,function
*/
 const id=Symbol('1245');
// const anotherid=Symbol('1245');
// console.log(id===anotherid);

// const bigNumber=255558145574445555n
// console.log(bigNumber);

const heros=["hello","hey","hiii"];

let myprofile={
//Object
name:"shivam",
surname:"singh",
age:23,
};

//variable function
 const myfunction=function(){
  console.log("hello world");
 };
 console.log(myfunction);

 console.log(typeof id);