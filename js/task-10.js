function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const enteredNumber = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");

createButton.addEventListener("click", () => {
  let boxesAmount = enteredNumber.value;
  let boxSize = 30;
  for (let i = 0; i < boxesAmount; i++) {
    let createdBox = document.createElement("div");
    createdBox.style.width = boxSize + "px";
    createdBox.style.height = boxSize + "px";
    createdBox.style.backgroundColor = getRandomHexColor();

    boxSize += 10;

    boxes.append(createdBox);
  }
});

destroyButton.addEventListener("click", () => {
  boxes.innerHTML = "";
  enteredNumber.value = null;
});
