function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEl = document.querySelector("[data-create]");
const clearBtnEl = document.querySelector("[data-destroy]");
const valueCountEl = document.querySelector("#controls input");

createBtnEl.addEventListener("click", () => {
  if (document.body.querySelector(".div-list")) {
    destroyBoxes();
  }

  createBoxes();
});

clearBtnEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(valueCountEl.value);
  valueCountEl.value = "";
  const divListEl = document.createElement("ul");
  divListEl.classList.add("div-list");
  divListEl.style.listStyle = "none";
  divListEl.style.display = "flex";
  divListEl.style.flexWrap = "wrap";
  divListEl.style.gap = "40px 20px";
  divListEl.style.justifyContent = "space-between";

  const divArrayEl = [];
  for (let i = 0; i < amount; i += 1) {
    const divListItem = document.createElement("li");
    divArrayEl[i] = document.createElement("div");
    divArrayEl[i].style.width = `${30 + i * 10}px`;
    divArrayEl[i].style.height = `${30 + i * 10}px`;
    divArrayEl[i].style.backgroundColor = getRandomHexColor();

    divListItem.append(divArrayEl[i]);
    divListEl.append(divListItem);
  }

  document.body.append(divListEl);
}

function destroyBoxes() {
  const divListEl = document.body.querySelector(".div-list");
  divListEl.remove();
}
