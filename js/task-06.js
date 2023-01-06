const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === parseInt(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
