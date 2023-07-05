const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const textColorEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  textColorEl.textContent = currentColor;
}
