let numStorage = [];
wakeServer();
document.getElementById('roll-btn').addEventListener('click', rollDice)
document.getElementById('reset-btn').addEventListener('click', gameReset);

function winCheck(result){
    document.getElementById('reset-btn').style.display = 'block';
    if (result === "true"){
       displayResult("confetti");
       document.getElementById('roll-btn').innerHTML = 'You Win!'
    }else{
        displayResult("fire");
        document.getElementById('roll-btn').innerHTML = 'BOOM!';
    }
}

function displayIcon(number, result){
    const iconCont = document.getElementById('dice');
    const iconImg = document.createElement('img');
    iconCont.innerHTML = '';
    if(result === null){
        iconImg.src = `img/dice-${number}.png`;
        iconImg.className = "icons-image"
        iconImg.alt = `dice-${number} image`;
        iconCont.appendChild(iconImg);
    }
    else{
        iconImg.src = `/img/${result}.png`;
        iconImg.className = "icons-image";
        iconImg.alt = `${result} image`;
        iconCont.appendChild(iconImg);
    }
}

function gameReset(){
    const diceCont = document.getElementById('dice');
    diceCont.innerHTML = '';
    document.getElementById('reset-btn').style.display = 'none';
    document.getElementById('roll-btn').innerHTML = 'ROLL';
}
async function wakeServer(){
    try{
        await fetch("https://node-dice-roller.azurewebsites.net/roll");
    }
    catch (e){
        console.log("Unable to wake server.");
    }
}
async function rollDice(){
    try{
        const response = await fetch("https://node-dice-roller.azurewebsites.net/roll");
        const data = await response.json();
        if (data.msg !== ""){
            getResult();
            return;
        }
        // API returns JSON value random number
        let number = data.number;

        if (numStorage.length <= 3){
            numStorage.push(number);
            displayIcon(number);
        }
    }
    catch (e){
        console.log("Error fetching dice rolls.")
    }
}

async function getResult(){
    try{
        const response = await fetch("https://node-dice-roller.azurewebsites.net/result");
        const data = await response.json();
        const gameResult = data.result;
        if (data.result !== ""){
            winCheck(gameResult); 
            resetGame();   
        }
    }
    catch (e){
        console.log("Error fetching game results.")
    }
}

async function resetGame(){
    try{
        const response = await fetch("https://node-dice-roller.azurewebsites.net/reset");
        console.log("reset game");
        numStorage = [];
    }
    catch (e){
        console.log("Error resetting game.")
    }
}