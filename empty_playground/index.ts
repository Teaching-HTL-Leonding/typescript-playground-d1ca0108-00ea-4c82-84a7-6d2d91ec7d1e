function setup() {
    createCanvas(300, 300);
    background("gold");
}

function mouseClicked() {
    fill("white");
    circle(mouseX, mouseY, 15);

    fill("gold");
    noStroke();
    rect(0, height - 20, width / 2, height);

    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 5, height - 5);
}

function mouseMoved() {
    noStroke();
    fill("gold");
    rect(width / 2, height - 20,
        width / 2, 20);

    fill("black");
    text(`X: ${mouseX}, Y:${mouseY}`, 200, height - 5);

}
