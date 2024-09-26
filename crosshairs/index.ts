function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

function mouseMoved() {
  background("lightblue");

  // Add your code here
  noFill();
  strokeWeight(2.8);
  circle(mouseX, mouseY, 20);
  strokeWeight(3.2)
  circle(mouseX, mouseY, 55);

  line(mouseX, mouseY - 45, mouseX, mouseY);
  line(mouseX, mouseY + 45, mouseX, mouseY);


  line(mouseX, mouseY, mouseX - 45, mouseY)
  line(mouseX, mouseY, mouseX + 45, mouseY)
}
