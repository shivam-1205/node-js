//filter  //Method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method. 
//ham ek array create karegenge jismain ek sirf vohi element hoga joh condition main diaa hoga

const myarray=[1,2,3,4,5,6,7,8,9,10]


// 1)
const myarr=myarray.filter((arr)=>arr>4)
console.log(myarr);

// 2)
// const myarr=myarray.filter((arr)=>{
//    return arr>4
 
// })
//  console.log(myarr);

// 3)
const myarray1=[]

myarray.forEach((arr)=>{
    if (arr>4) {
         myarray1.push(arr)
     
    }
})
console.log(myarray1);