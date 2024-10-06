function setup() {
    createCanvas(600, 300);
    background("black");
    noStroke();

    fill("orange")
    rect(0, 0, width / 2, height / 2)

    fill("green")
    rect(width / 2, 0, width / 2, height / 2)

    fill("blue")
    rect(0, height / 2, width / 2, height / 2)

    fill("red")
    rect(width / 2, height / 2, width / 2, height / 2)

    fill("black")
    rect(width / 3.25, height / 2.75, width / 2.5, height / 4)
}

function mouseClicked() {
    if (mouseX < width / 2 && mouseY < height / 2) {
        fill("black")
        rect(width / 3.25, height / 2.75, width / 2.5, height / 4)

        fill("white")
        textSize(50)
        text("Orange", width / 2.75, height / 1.85)
    }

    else if (mouseX > width / 2 && mouseY < height / 2) {
        fill("black")
        rect(width / 3.25, height / 2.75, width / 2.5, height / 4)

        fill("white")
        textSize(50)
        text("Green", width / 2.6, height / 1.85)
    }

    else if (mouseX < width / 2 && mouseY > height / 2) {
        fill("black")
        rect(width / 3.25, height / 2.75, width / 2.5, height / 4)

        fill("white")
        textSize(50)
        text("Blue", width / 2.4, height / 1.85)
    }

    else {
        fill("black")
        rect(width / 3.25, height / 2.75, width / 2.5, height / 4)

        fill("white")
        textSize(50)
        text("Red", width / 2.35, height / 1.85)
    }
}