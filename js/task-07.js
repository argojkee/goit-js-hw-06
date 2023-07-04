const inputControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputControlEl.addEventListener("input", changeTextSizeInput);

function changeTextSizeInput(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
