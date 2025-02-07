let i = 0;
let playersCount = 0;
let all_players = []
let randomNames = [
    "Lucas", 
    "Thomas", 
    "David", 
    "Felix", 
    "Bob", 
    "Timo",
    "Bobby"
]

function setup() {
    createCanvas(500, 400)
    background("grey")
    rect(0, 0, width, height / 2)
}

function mouseClicked() {
    if (mouseY < height / 2) {
        playersCount++;
        let randomNameSelector = randomNames[Math.floor(random(0, randomNames.length))]
        all_players.push(randomNameSelector)
        print(`${randomNameSelector} got added!`)
    }
    else if (mouseY > height / 2 && playersCount > i) {
        print(all_players[i])
        i++;
    }
    else {
        print("No other player found")
    }
}