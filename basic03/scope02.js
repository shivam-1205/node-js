if (true){
    var a=10;
    let b=20;
    const c=30;
}
 //console.log(a);
// console.log(b);
// console.log(c);



/*
            out of the bracket that is called global scope:-
    var a=10;
    let b=20;
    const c=30;

                in the the bracket that is called block scope:-    {
    var a=10;
    let b=20;
    const c=30;
    }
    */

   // nested scope
   function one(){
    const username="shivam"
    //console.log(myname);---not access

    function two(){
        let myname="rajput"
       // console.log(username);

        function three(){
            const lastname="singh"
            // console.log(myname);
            // console.log(username);

        }
       // console.log(lastname);
        three()
    }
    two()
}
one()
 

if(true){
    const username="shivam"
    if(username==="shivam"){
        const learn="javascript"
        // console.log(username);
        // console.log(learn);
        
    }
   // console.log(learn); because of blockscope
}
//console.log(username);



//************      function/intersting             ***********//

                    //basic function 

   mynames(2)      //no error           
function mynames(num){
    return num+1;
}

                    
                              //var function

   addtwo(2)     //error  before initialization   //hosting bolte hai   
const addtwo = function(num){
    return num+1;
}
