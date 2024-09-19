function setup() {
    createCanvas(600, 600);
    background(161, 204, 232);

    // Haus
    fill(219, 51, 24);
    strokeWeight(2);
    rect(100, 350, 200, 200);

    fill(253, 255, 83);
    strokeWeight(2.4);
    rect(165, 450, 75, 100);

    fill(119, 23, 8);
    triangle(330, 350, 70, 350, 200, 230);

    // Baum
    fill(143, 52, 45);
    strokeWeight(2.1);
    rect(400, 350, 40, 200);

    fill(68, 126, 35);
    circle(420, 325, 135);

    circle(375, 370, 135);

    circle(470, 370, 135);
}
