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
    "NPC",
    "goat",
    "young fella",
    "champ",
    "chief",
    "bossman",
    "pal",
    "amigo",
    "clown",
    "dude"
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
