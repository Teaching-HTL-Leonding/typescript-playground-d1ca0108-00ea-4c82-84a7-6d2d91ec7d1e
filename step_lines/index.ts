function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(2);

    for (let i = GRID; i < width; i += GRID) {
        stroke("yellow")
        line(GRID, i, i, i)
        stroke("red")
        line(width - GRID, i, i, i)
    }
}
