

function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}

let grid = 10;


function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);
    noFill();
    stroke("aqua");
    let patternSize = 10;
    // <<< Add your code here
    for (let y = 0; y < height; y += patternSize) {
        for (let x = 0; x < width; x += patternSize) {
            push();
            translate(x, y);
            line(0, 0, patternSize, patternSize / 2);
            line(patternSize, patternSize / 2, 0, patternSize);
            pop()
        }
    }


    fill("black")
    noStroke();
    rect(0, height - 30, width, 30)
    textSize(15)
    fill("white")
    text(`${mouseX} of 601 = ${Math.floor(mouseX / 3)}%`, 70, height - 15);
}

