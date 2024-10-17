function setup() {
  let num = Math.floor(random(0, 1_000_000));
  createCanvas(600, 350);
  background("black");

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  const digit1 = num % 10;
  num = Math.floor(num / 10);

  const digit2 = num % 10;
  num = Math.floor(num / 10);

  const digit3 = num % 10;
  num = Math.floor(num / 10)

  const digit4 = num % 10;
  num = Math.floor(num / 10);

  const digit5 = num % 10;
  num = Math.floor(num / 10);

  const digit6 = num % 10;
  num = Math.floor(num / 10);

  noFill()
  stroke("yellow")
  strokeWeight(2)
  rect(width / 6 - 80, height / 3, 60, height / 3)

  rect(width / 3 - 80, height / 3, 60, height / 3)

  rect(width / 2 - 80, height / 3, 60, height / 3)

  rect(width / 1.8 - 10, height / 3, 60, height / 3)

  rect(width / 1.4 - 10, height / 3, 60, height / 3)

  rect(width / 1.15 - 10, height / 3, 60, height / 3)

  textSize(65)
  fill("yellow")
  text(digit6, width / 6 - 50, height / 2)
  text(digit5, width / 3 - 50, height / 2)
  text(digit4, width / 2 - 50, height / 2)
  text(digit3, width / 1.8 + 20, height / 2)
  text(digit2, width/ 1.4 + 20, height / 2)
  text(digit1, width / 1.15 + 20, height / 2)
}
