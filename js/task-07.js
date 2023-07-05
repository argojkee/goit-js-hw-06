const inputControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputControlEl.addEventListener("input", changeTextSizeInput);

function changeTextSizeInput() {
  textEl.style.fontSize = inputControlEl.value + "px";
}

changeTextSizeInput();
