let counterValue = 0;

const counterEl = document.getElementById("value");
const decreaseBtn = document.querySelector("button[data-action=decrement]");
const increaseBtn = document.querySelector("button[data-action=increment]");

decreaseBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

increaseBtn.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});
