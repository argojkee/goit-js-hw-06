const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", checkedInputValue);

function checkedInputValue(event) {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    if (event.currentTarget.classList.contains("invalid")) {
      event.currentTarget.classList.remove("invalid");
    }
    event.currentTarget.classList.add("valid");
  } else {
    if (event.currentTarget.classList.contains("valid")) {
      event.currentTarget.classList.remove("valid");
    }
    event.currentTarget.classList.add("invalid");
  }
}
