const form=document.querySelector('form');
//this use case give you value
// const Height= parseInt( document.querySelector('#Height').value)

form.addEventListener('submit', function(event){
    event.preventDefault();

  const Height= parseInt( document.querySelector('#Height').value);
  //parseInt means we pass a value in the int
   const Weight=parseInt( document.querySelector('#Weight').value);
   const result= document.querySelector('#regult');
      if (Height=== '' || Height<0 || isNaN(Height)) {
       result.innerHTML=`please give a valid height ${Height}`;
      }
      else if(Weight=== '' || Weight<0 || isNaN(Weight)) {
        result.innerHTML=`please give a valid Weight ${Weight}`;
       }
       else{
       const bmi= ((Weight) / ((Height * Height)/10000) ).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`
       }
      
      
})