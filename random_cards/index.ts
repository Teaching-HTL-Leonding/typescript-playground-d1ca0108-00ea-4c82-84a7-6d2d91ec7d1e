let cardImage: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  const colorIx = Math.floor(random(0, 4));
  let colorName: string;

  switch (colorIx) {
    case 0:
      colorName = "clubs"
      break;
    case 1:
      colorName = "diamonds"
      break;
    case 2:
      colorName = "hearts"
      break;
    case 3:
      colorName = "spades"
      break;
  }

  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  const cardIx = Math.floor(random(1, 14));
  let cardName: string;

  switch (cardIx) {
    case 0:
      cardName = "A"
      break;
    case 1:
      cardName = "2"
      break;
    case 2:
      cardName = "3"
      break;
    case 3:
      cardName = "4"
      break;
    case 4:
      cardName = "5"
      break;
    case 5:
      cardName = "6"
      break;
    case 6:
      cardName = "7"
      break;
    case 7:
      cardName = "8"
      break;
    case 8:
      cardName = "9"
      break;
    case 9:
      cardName = "10"
      break;
    case 10:
      cardName = "J"
      break;
    case 11:
      cardName = "Q"
      break;
    case 12:
      cardName = "K"
      break;
  }

  cardImage = loadImage(`${BASE_URL}/${colorName}/${cardName}.png`)
}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
