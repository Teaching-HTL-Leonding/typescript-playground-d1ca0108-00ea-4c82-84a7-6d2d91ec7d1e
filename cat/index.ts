function setup() {
    createCanvas(500, 600);
    background(146, 251, 254);

    textSize(35);
    textFont("cursive");
    fill("white");
    stroke("black");
    strokeWeight(4)
    text("Click to pet me", 140, 80)

    // Kopf
    fill(211, 211, 211);
    stroke("black");
    strokeWeight(2);
    circle(245, 350, 300);

    // Nase
    fill(239, 194, 203);
    triangle(230, 365, 
             260, 365,
             245, 377);

    // Mund
    strokeWeight(2.3);
    line(245, 377, 245, 400);

    line(245, 400, 220, 410);
    line(245, 400, 270, 410);

    line(220, 410, 165, 395);
    line(270, 410, 325, 395);

    line(270, 370, 325, 355);
    line(220, 370, 165, 355);

    line(220, 380, 165, 380);
    line(270, 380, 325, 380);
    
    // Ohren
    fill(211, 211, 211);
    triangle(120, 235, 160, 115, 210, 185);
    triangle(390, 245, 370, 115, 300, 190);

    // Augen
    fill("black");
    noStroke();
    circle(205, 330, 28);
    circle(285, 330, 28);
}

function mouseClicked() {
    textSize(30);
    textFont("cursive");
    fill("white");
    stroke("black");
    strokeWeight(4)
    text("Meow!", mouseX, mouseY);
}