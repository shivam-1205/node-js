const clock=document.getElementById('clock')

let date=new Date()
console.log(date.toLocaleDateString());

// setInterval(() => {
    
// }, interval);
// //yeh mathod bolta hai aap ek interval baatayea kab run karna hai tab run kar dunga


setInterval(() => {
    let date=new Date()
console.log(date.toLocaleDateString());
clock.innerHTML=date.toLocaleTimeString();
}, 1000);

