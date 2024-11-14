const SIZE = 400;    // Canvas size (square)
  const MARGIN = 25; // Margin between the edges and the rays.
                     // This is also the distance between the rays.

  function setup() {
    createCanvas(SIZE, SIZE);
    background("black");
    colorMode(HSB)
  }

  let color_hue: number = 0;

  function draw() {
    background("black");
    strokeWeight(2);

    // <<< Add your code here
    let i = MARGIN;
    while (i <= SIZE - MARGIN) {
      stroke(color_hue, 100, 100);
      line(MARGIN, i, mouseX, mouseY);
      line(width - MARGIN, i, mouseX, mouseY);

      line(i, MARGIN, mouseX, mouseY);
      line(i, height - MARGIN, mouseX, mouseY);

      i += MARGIN;
      color_hue = (color_hue + 0.25) % 360;
    }
  }
