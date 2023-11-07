// using for each loop //jab bhi array ko create karenge hai ham element ko bhi insert karte hai .jab bhi ham foreach use karenge tab voh har elemet ko cll kardega.return nahi karta 
const arr=["shivam","manish","aatish","santosh"];
 
//simple function
//(item)-jaha pe item dala waha pe har value ka access hota hai//pra
arr.forEach(function (item){
    console.log(item);

})
//arrow
arr.forEach((item) => {
   // console.log(item);
});


// function printMe(item){
//     console.log(item);
// }
// arr.forEach(printMe)



// arr.forEach((item,index,array) => {
//     console.log(item,index,array);
// });


const mycoding=[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    
]

mycoding.forEach((item)=>{
    //console.log(item.languageName);//for access the object
})