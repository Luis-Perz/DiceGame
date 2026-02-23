const diceImg = ['/img/dice-one.png', '/img/dice-two.png', '/img/dice-three.png',
    '/img/dice-four.png', '/img/dice-five.png', '/img/dice-six.png',
]
document.getElementById('roll-btn').addEventListener('click', randomNumber)
document.getElementById('reset-btn').addEventListener('click', gameReset);

function checkWin(number){
    if (number === 11){
       displayResult("confetti")
       document.getElementById('reset-btn').style.display = 'block';
       document.getElementById('roll-btn').innerHTML = 'You Win!'
    }else{
        displayResult("fire")
        document.getElementById('reset-btn').style.display = 'block'
        document.getElementById('roll-btn').innerHTML = 'BOOM!';
    }
}
function displayResult(result){
    const diceCont = document.getElementById('dice');
    
    const diceImg = document.createElement('img');
    diceCont.innerHTML = '';

    diceImg.src = `/img/${result}.png`;
    diceImg.className = "icons-image"
    diceImg.alt = `${result} image`;

    diceCont.appendChild(diceImg);
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
 

