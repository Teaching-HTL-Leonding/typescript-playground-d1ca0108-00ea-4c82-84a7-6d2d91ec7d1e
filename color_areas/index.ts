function setup() {
    createCanvas(600, 400);
    background("black");
    noStroke();

    // <<< Add your code here
    fill("orange")
    rect(0, 0, width / 3, height / 1.15)

    fill("green")
    rect(width / 3, 0, width / 3, height / 1.15)

    fill("red")
    rect(width - width / 3, 0, width / 3, height / 1.15)
}

// <<< Add the function `moveClicked` with the required code here
function mouseClicked() {
    fill("black")
    rect(0, height - 45, width, height - 30)

    if (mouseX < width / 3) {
        fill("white")
        textSize(25)
        text("orange", width / 2 - 40, height - 20)
    } 
    else if (mouseX < width * 2 / 3) {
        fill("white")
        textSize(25)
        text("green", width / 2 - 40, height - 20)
    }
      else {
        fill("white")
        textSize(25)
        text("red", width / 2 - 40, height - 20)
    }
}