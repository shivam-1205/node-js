// const usergmail=[] //truthy value falsy

// if (usergmail) {
//     console.log("got gmail");
    
// }else{
//     console.log("dont have gmail");
//}

//falsy value
//false,"",bigint 0n <-zero N, 0,-0,nan,undifind,null

// truthy value
// [],"0",'false'," ",{},function(){},

// if (usergmail.length===0) {//for array
//     console.log("array is empty");
// }
// const emptyobj={}
// if (Object.keys(emptyobj).length===0) {//object
//     console.log("object is empty");
    
// }

//interview Que
// false==0
// true

// false==''
// true

// 0==''
// true


//nullish Coalescing operator (??): null undefined 

let val1;
//val1=5??10//get first no available then its get second value//batabase se cll karege direct responce nahi milta hai then hame 2value milta hai 

0
val1=null??10
console.log(val1);


//tarniary operator
//condition ? truth:false

const iceTeaPrice=100;
iceTeaPrice<=80 ? console.log("less then 80"):console.log("grater then 80");