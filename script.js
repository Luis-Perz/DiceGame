let numStorage = []
const diceImg = ['/img/dice-one.png', '/img/dice-two.png', '/img/dice-three.png',
    '/img/dice-four.png', '/img/dice-five.png', '/img/dice-six.png',
]
document.getElementById('roll-btn').addEventListener('click', randomNumber)

function getTotal(){
    total = numStorage.reduce((sum, num) => sum + num, 0)
    return total;
}
function winCheck(number){
    if (number === 11){
       displayResult("confetti")
    }else{
        displayResult("fire")
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


