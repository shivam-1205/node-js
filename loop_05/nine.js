// reduce
let num=[1,2,3]

//const newNum=num.reduce(function(accumulator,currentValue){
     // console.log(`acc:${accumulator} , currval:${currentValue}`);
   //   return accumulator + currentValue
//}, 0 );

// arrow
//const newNum=num.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
//console.log(newNum);

let shopingCart=[
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"python course",
        price:399
    },
    {
        itemName:"java course",
        price:499
    },
    {
        itemName:"data science course",
        price:699
    }
]

const priceToPay=shopingCart.reduce((acc,item)=>acc+item.price,0)
 console.log(priceToPay);
