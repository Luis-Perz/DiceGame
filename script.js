let numStorage = []
const diceImg = ['/img/dice-one.png', '/img/dice-two.png', '/img/dice-three.png',
    '/img/dice-four.png', '/img/dice-five.png', '/img/dice-six.png',
]
document.getElementById('roll-btn').addEventListener('click', randomNumber)
document.getElementById('reset-btn').addEventListener('click', gameReset);
function getTotal(){
    total = numStorage.reduce((sum, num) => sum + num, 0)
    return total;
}
function winCheck(number){
    if (number === 11){
       displayResult("confetti")
       document.getElementById('reset-btn').style.display = 'block';
       document.getElementById('roll-btn').innerHTML = 'You Win!'
    }else{
        console.log("You Won")
        displayResult("fire")
        document.getElementById('reset-btn').style.display = 'block'
        document.getElementById('roll-btn').innerHTML = 'BOOM!';
    }
}


function displayResult(result){
    const resultCont = document.getElementById('dice');
    
    const resultImg = document.createElement('img');
    diceCont.innerHTML = '';

    resultImg.src = `/img/${result}.png`;
    resultImg.className = "icons-image";
    resultImg.alt = `${result} image`;

    resultCont.appendChild(diceImg);
}
function displayDice(number){
   
    const diceCont = document.getElementById('dice');
    const diceImg = document.createElement('img');
    diceCont.innerHTML = '';

    diceImg.src = `img/dice-${number}.png`;
    diceImg.className = "icons-image"
    diceImg.alt = `dice-$(number} image`;

    diceCont.appendChild(diceImg);
    
}
function gameReset(){
    numStorage = [];
    const diceCont = document.getElementById('dice');
    diceCont.innerHTML = '';
    document.getElementById('reset-btn').style.display = 'none';
    document.getElementById('roll-btn').innerHTML = 'ROLL';
}
function randomNumber(){
    
    number = Math.floor(Math.random() * 6) + 1;
    
    if (numStorage.length !== 3){
        numStorage.push(number)
        displayDice(number)
        console.log(numStorage)
    }
    else if(numStorage.length === 3){
        total = getTotal();
        winCheck(total);
    }
    
}


