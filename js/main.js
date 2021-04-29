const game = document.querySelector("game");

function initGame(){

}

function createFish(){
    let fish = document.createElement("fish");

    let posY = randomPosY();
    let posX = randomPosX();

    let hue = randomHue();

    fish.style.transform = `translate(${posX}px, ${posY}px)`;
    fish.style.filter = `hue-rotate(${hue}deg)`;

    game.appendChild(fish);
}

function createBubble(){
    let bubble = document.createElement("bubble");

    let posY = randomPosY();
    let posX = randomPosX();

    bubble.style.transform = `translate(${posX}px, ${posY}px)`;
    
    game.appendChild(bubble);
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


createFish();

createBubble();



