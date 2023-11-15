const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")


buttons.forEach((button)=>{
console.log(button);
button.addEventListener('click',function(event){
     console.log(event);
     console.log(event.target);
         
     switch (event.target) {
        case grey:
            console.log(body.style.backgroundColor='grey');
            break;
        case white:
            console.log(body.style.backgroundColor='white');
            break;
            case blue:
                console.log(body.style.backgroundColor='blue');
                break;
        case yellow:
            console.log(body.style.backgroundColor='yellow');
            break;
        case purple:
            console.log(body.style.backgroundColor='purple');
            break;
     
        default:
            break;
     }

})
})