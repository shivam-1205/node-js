// let mydate=new Date()
// console.log(mydate);

// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());

// let mybirthday=new Date(2029,5,12 ,5,6);
// console.log(mybirthday.toLocaleDateString());//here we can show date of month and all

let myCreated= new Date("05/12/2023")//mm/dd/yy
//console.log(myCreated.toLocaleString())

 let timestemp=Date.now()
// console.log(timestemp);
// console.log(myCreated.getTime());

//console.log(Math.floor(Date.now()/1000));

let newdate=new Date()
console.log(newdate.getFullYear());
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getMonth());
console.log(newdate.toLocaleString());

newdate.toLocaleString('default',{
    weekday:"long",
    

})


