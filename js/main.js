const game = document.querySelector("game");

const plopSound = new Audio('./sound/plop.mp3')
const bruhSound = new Audio('./sound/bruh.mp3')
const leaveSound = new Audio('./sound/leave.mp3')

let fishAmount = Math.floor(Math.random() * 100);
let bubbleAmount = Math.floor(Math.random() * 100); 

initGame();

function initGame(){
    for (let i = 0; i < fishAmount; i++) {
        createFish();
    }
    
    for (let i = 0; i < bubbleAmount; i++) {
        createBubble();
    }    
}

function createFish(){
    let fish = document.createElement("fish");

    fish.addEventListener("click", clickHandlerFish);

    let posY = randomPosY();
    let posX = randomPosX();

    let hue = randomHue();

    fish.style.transform = `translate(${posX}px, ${posY}px)`;
    fish.style.filter = `hue-rotate(${hue}deg)`;

    game.appendChild(fish);
}

function clickHandlerFish(e){
    e.target.classList.add("dead")
    leaveSound.play()
}

function createBubble(){
    let bubble = document.createElement("bubble");

    bubble.addEventListener("click", clickHandlerBubble);

    let posY = randomPosY();
    let posX = randomPosX();

    bubble.style.transform = `translate(${posX}px, ${posY}px)`;
    
    game.appendChild(bubble);
}

function clickHandlerBubble(e){
    e.target.remove()
    bruhSound.play()
}


function randomPosX(){
    return Math.floor(Math.random() * window.innerWidth);
}

function randomPosY(){
    return Math.floor(Math.random() * window.innerHeight);
}

function randomHue(){
    return Math.floor(Math.random() * 360);
}

