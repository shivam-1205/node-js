//map
// for_of loop //array specific loop hai array and object imp hai
// loops through the values of an iterable object

// [""]//string in array
// [{},{}]//object in array

// for (const iterator of object) {
  
// }

const arr=[1,2,3,4]
// iterator:object ,array,string bhi iterator hai jaise ham "i" value dete loop main vaise hai , aur const baad var ka name bhi aata hai-----object yeh alag hai:iska matabl kis chiz pe loop lagana hai voh dal do
for (const num of arr) {
    console.log(num);
}

const greetings="hello world"
for (const i of greetings) {
  //  console.log(`each char is ${i}`);
}




// MAPs is object --The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map=new Map()
map.set('IN',"India")
map.set('USA','united States of america')
map.set('Fr','France')
map.set('Fr','France')//not print same two entry
//console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myobject={
    'game':'NFS',
    'game':'spiderman'
}
// for (const [keys] of myobject) {
//     console.log(key,':-',value);
// }// error myobject is not iterable

