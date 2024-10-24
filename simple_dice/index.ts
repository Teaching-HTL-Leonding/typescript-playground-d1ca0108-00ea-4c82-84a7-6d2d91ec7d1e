function setup() {
    createCanvas(500, 500)
    background("black")

    const dice = Math.floor(random(1, 7))

    let message: string;
    if(dice === 1) { message = "eins"}
    else if(dice === 2) { message= "zwei"}
    else if(dice === 3) { message= "drei"}
    else if(dice === 4) { message= "vier"}
    else if(dice === 5) { message= "fünf"}
    else if(dice === 6) { message= "sechs"}

    textAlign(CENTER, CENTER)
    textSize(60)
    fill("white")
    text(message, width / 2, height / 2)
}