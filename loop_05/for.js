//for loop //  used to repeat a specific block of code a known number of times.
// A for loop repeats until a specified condition evaluates to false
for (let i = 0; i <10; i++) {
    const element =i;
    if (element==5) {
       // console.log("5 is a best number");
    }
   //console.log(element);
}

// for (let i = 0; i < 3; i++) {
    
//    for (let j = 0; j < 3; j++) {
//   // console.log(`inner loop value:${j}`);
//   console.log(i+ '*'+ j +' = '+ i*j);//table
//    }
//    console.log(`outer loop value:${i}`);
// }

////////////////////diffrent betwwen 

// for (let i = 0; i < 3; i++) {
//     console.log(`outer loop value:${i}`);
//     for (let j = 0; j < 3; j++) {
//    // console.log(`inner loop value:${j}`);
//    console.log(i+ '*'+ j +' = '+ i*j);//table
//     }
    
//  }

// let myarray=["superman","batman","flash","aquaman"]
// console.log(myarray.length);//4
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//    // console.log(index);//print 0,1,2,3
//    // console.log(myarray);//print all array same
//     console.log(element);//print superman,btman,flash,aquaman
    
// }

//break and continue

for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log('detected 5');
       // break
        continue
    }
  console.log(`value of i is ${index}`);
    
}
