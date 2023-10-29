// //array
// const myarr=[1,2,3,4,5];//single var main element rakh sakte hai
// const myhero=["saktiman","ironman","superman"];
// const myarr2=new Array(2,2,5,5);

// //console.log(myarr[4]);


// //array mathod

// // myarr.push(6)
// // myarr.push(7)
// // myarr.pop()
// // console.log(myarr);

// // myarr.unshift(0); //add new element 0 in the starting
// // myarr.shift(); //remove the element in starting


// // console.log(myarr.includes(8));//to search the boolearn
// // console.log(myarr.indexOf(5));//which line aur -1 show

// // const newarr= myarr.join() add two array
// // console.log(myarr);
// // console.log( newarr);//string chnge add to array


// //slice splice

// console.log("a",myarr);
// const myn1=myarr.slice(1,3);

// console.log(myn1)
// console.log("b",myarr);

// const myn2=myarr.splice(1,3);
// console.log("c",myarr)//array can change and sllice yeah porsiton can also remove form original array ,original arry can manupulate
// console.log(myn2);


//**************commbination  */
// const marval_hero=["ironman","thor","loki"];
// const Dc_hero=["batman","superman","aquaman"]

//marval_hero.push(Dc_hero);

// const allheros=marval_hero.concat(Dc_hero);
// console.log(allheros);

// const allnewhero=[...marval_hero,...Dc_hero]//separate operator for combind with each other
// console.log(allnewhero);
const newarray=[1,2,3,[4,5,6],7,[8,9,[2,3]]];
const realarray=newarray.flat()
console.log(realarray);




console.log(Array.isArray("shivam"))
console.log(Array.from("shivam"))

const arry1=200
const arry2=200
const arry=200
console.log(Array.of(arry1,arry2,arry));