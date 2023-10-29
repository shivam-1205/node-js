function shivam(){
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");
}
//shivam()//refration /execution


//-------------(number1, number2 )is a--->parameters
// function addTwoNumber(number1, number2 ){

//    console.log( number1+number2);

// }
// addTwoNumber(2,null)//when you called a function it's called arguments



//function addTwoNumber(number1, number2 ){
//let result=number1+number2     //----ex1
 // return result                //=----return ke baad kuch bhi print nahi hota hai

 // return number1+number2    //ex-2----
 
  //}
  //addTwoNumber(2,null)
//  const result=addTwoNumber(2,5)//kise var main store kar sakate hai
// console.log("regult:",result);


//using if statement

function loginUserMessage(userMessage){
    if(userMessage===undefined){
        //!=exclamatory for true aur false
        console.log("please enter a username sir");
        return
    }
    return`${userMessage} just login`
     
}
//console.log(loginUserMessage("shivam"))
//console.log(loginUserMessage())

//******************************************************* */

                           //...rest or spread operator

function shopCal(...shope){
    return shope

}
      //console.log(shopCal(200,300,400,500));//they print in array[] 


//******************************************************* */

                                  //object function 
 const obj={
    userName:"shivam",
    userGamil:"shivam@gmail.com"
 }

 function callObject(addobject){
      console.log(`my name is ${addobject.userName} and my gmail is ${addobject.userGamil}`);
      console.log(addobject.userGamil);

 }
 //callObject(obj)


 const classes={
    ClassName:"yaahuu",
    price:"599"
 }

 function Nameclass(classname){
    console.log(`our class name is ${classname.ClassName},and its price is ${classname.price}`);
    
 }
 //Nameclass(classes)

                       //  2types object function
function hello(myname){
    console.log(`our class name is ${myname.name1},and its price is ${myname.prices}`);
}
//hello({name1:"shivam",
       // prices:2});//over-ride

 //******************************************************* */


                //   array function

    const array1=[20,30,40,55];
    function NewArray(array2){
        return array2[2]
    }
    //console.log(NewArray(array1));

    //console.log(NewArray([50,90,80,70]))




