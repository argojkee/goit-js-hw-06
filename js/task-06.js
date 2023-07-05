const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", checkedInputValue);

function checkedInputValue(event) {
  if (
    event.currentTarget.value.trim().length === Number(inputEl.dataset.length)
  ) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}
