// chaining mathod
const num=[1,2,3,4,5,6,7,8,9,10]
// const newNum=num.map((nums)=>{return nums+10})
// console.log(newNum);


// its is called chaining
const newNum=num
      .map((nums)=>nums*10)
      .map((nums)=>nums+1)
     .filter((nums)=>nums>=40)//true and false

console.log(newNum);