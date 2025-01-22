// script.js
const names = [
    "Ben",  
    "Player 1", 
    "Player", 
    "Human", 
    "Mr.",
    "New User", 
    "Traveler", 
    "Stranger", 
    "King", 
    "Sir", 
    "Boy", 
    "Friend", 
    "Unkown", 
    "Nomad",
    "Human", 
    "Bro", 
    "Man", 
    "Queen", 
    "Cun", 
    "Brother", 
    "Fam", 
    "Fella", 
    "My guy", 
    "NPC"
];


// Old crap
let timerInterval;
function startTimer() {
    clearInterval(timerInterval);
    document.body.style.backgroundColor = 'black';
    let countdown = 30 * 60; // 30 minutes in seconds
    const randomName = names[Math.floor(Math.random() * names.length)];
    
    function updateTimer() {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (countdown <= 0) {
            document.body.style.backgroundColor = 'pink';
            document.getElementById('reminder').textContent = `Look outside ${randomName}!!`;
        } else {
            document.getElementById('reminder').textContent = `Keep grinding ${randomName}...`;
        }

        if (countdown <= 0 || countdown === 30 * 60) {
            clearInterval(timerInterval);
        }

        countdown--;
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

document.getElementById('resetButton').addEventListener('click', startTimer);

startTimer();

// My attempt for button:
//? I cracked this but for simplicity I'd rather just keep it as button yah 
// const buttonBoy = document.getElementById('resetButton');
// function changeButtonText() {
//     const randomName = names[Math.floor(Math.random() * names.length)];
//     buttonBoy.textContent = `Click me ${randomName}`;
// }
// buttonBoy.addEventListener('click', changeButtonText);