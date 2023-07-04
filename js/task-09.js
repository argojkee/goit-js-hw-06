const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const textColorEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", () => {
  onChangeColor();
  changeTextColorContent();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function changeTextColorContent() {
  textColorEl.textContent = bodyEl.style.backgroundColor;
}
