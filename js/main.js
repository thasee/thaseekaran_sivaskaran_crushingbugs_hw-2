//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
  puzzleBoard = document.querySelector(".puzzle-board"),
  puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
  dropZones = document.querySelectorAll(".drop-zone"),
  resetButton = document.querySelector("#resetBut");
//store the dragged piece in a global variable
//we will need it in the handleDrop function
let draggedPiece;

function changeBGImage() {
  //console.log("changeBGImage called");
  //url('../images/backGround0.jpg');
  puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() {
  console.log("working");
  //console.log("Started dragging this piece:", this)
  draggedPiece = this;
}

function handleDragOver(e) {
  e.preventDefault();
  //this will prevent the default dragover behaviour
  //e is short for event, could be e, evt a well
  console.log("dragged over me");
}

function handleDrop(e) {
  e.preventDefault();
  console.log("dropped something on me");
  //this line moves the dragged piece from the left side of the board
  //into whatever dropzone we choose.

  // if there is not image already then append
  if (this.childNodes.length == 0) {
    this.appendChild(draggedPiece);
  }
}

function changeGameBoard() {
  // remove all current images in div puzzle-pieces
  let puzzlePiecesDiv = document.querySelector(".puzzle-pieces");
  let images = puzzlePiecesDiv.querySelectorAll("img");
  images.forEach((image) => image.remove());

  let puzzleBoardImages = document.querySelector(".puzzle-board");
  images = puzzleBoardImages.querySelectorAll("img");
  images.forEach((image) => image.remove());

  let image = document.createElement("img");
  image.src = `images/topLeft${this.id}.jpg`;
  image.className = "puzzle-image";
  image.alt = "top left";

  puzzlePiecesDiv.appendChild(image);

  image = document.createElement("img");
  image.src = `images/topRight${this.id}.jpg`;
  image.className = "puzzle-image";
  image.alt = "top right";

  puzzlePiecesDiv.appendChild(image);

  image = document.createElement("img");
  image.src = `images/bottomLeft${this.id}.jpg`;
  image.className = "puzzle-image";
  image.alt = "bottom left";

  puzzlePiecesDiv.appendChild(image);

  image = document.createElement("img");
  image.src = `images/bottomRight${this.id}.jpg`;
  image.className = "puzzle-image";
  image.alt = "bottom right";

  puzzlePiecesDiv.appendChild(image);

  // Attach event listener to newly appended image elments
  document
    .querySelectorAll(".puzzle-pieces img")
    .forEach((piece) => piece.addEventListener("dragstart", handleStartDrag));
}

//event Listeners
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));

theButtons.forEach((button) =>
  button.addEventListener("click", changeGameBoard)
);

puzzlePieces.forEach((piece) =>
  piece.addEventListener("dragstart", handleStartDrag)
);

dropZones.forEach((zone) => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach((zone) => zone.addEventListener("drop", handleDrop));

// adding reset functionality
resetButton.addEventListener("click", function () {
  const puzzleBoard = document.querySelector(".puzzle-board");
  const puzzlePieces = document.querySelector(".puzzle-pieces");

  // Select all img elements within the puzzle-board div
  const images = puzzleBoard.querySelectorAll("img");

  // Move each image from puzzle-board to puzzle-pieces
  images.forEach((img) => {
    puzzlePieces.appendChild(img);
  });
});
