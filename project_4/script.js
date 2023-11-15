const userInput =document.getElementById('guessField')
const guessSlot =document.querySelector('.Guesses')
const remaining =document.querySelector('.lastResult')
const lowHigh =document.querySelector('.lowerhi')
const submit=document.querySelector('#sub')
const startOver=document.querySelector('.rusultparas')

let randomNumber=parseInt(Math.random()*100+1)


const p=document.createElement('p')

let prevGuess=[];
let numGUess=1;

let playGame=true;

if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault();
       const guess= parseInt(userInput.value);
       valiDateguess(guess);
    })
    
}

function valiDateguess(guess){
    //it can chack the number 1 to 100 
if (isNaN(guess)) {
    alert('please enter the valid number')
}else if(guess<1){
    alert('please enter a number more then 1')
    }else if(guess>100){
        alert('please enter the number less then 100')
        }  else{
            prevGuess.push(guess);
            if (numGUess===11) {
                displayGuess(guess);
                displaymassage(`Game Over. randon number was ${randomNumber}`)
                endGame();
            }else{
                displayGuess(guess);
                checkGuess(guess);
            }
        }
}

function checkGuess(guess){
//its can check the value is equal to random number,its qual the display you win, when its low the print low ,its high then print high
if (guess===randomNumber) {
    displaymassage(`you Guessed is right`)
    endGame() ;
}else if (guess<randomNumber) {
    displaymassage(`number is TOO low`)    
}else if (guess>randomNumber) {
    displaymassage(`number is TOO high`) ;

}
}

function displayGuess(guess){
//its can clean the value ,and upadate the guesses remaining 
  userInput.value=''
  guessSlot.innerHTML +=`${guess} , `;
  numGUess++;
  remaining.innerHTML=`${11-numGUess}`
}

function displaymassage(massage){
//we send the massage and its print 
lowHigh.innerHTML=`<h2>${massage}</h2>`
}


function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame()
}
function newGame(){
   const newGameButton= document.querySelector('#newGame')
    newGameButton.addEventListener('click' ,function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[]
    numGUess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGUess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p) 
        playGame=true
    })
}

