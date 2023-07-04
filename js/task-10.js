// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const createBtnEl = document.querySelector("[data-create]");
// const clearBtnEl = document.querySelector("[data-destroy]");
// const valueCountEl = document.querySelector("#controls input");
// const divContainerEl = document.querySelector("#boxes");

// divContainerEl.style.listStyle = "none";
// divContainerEl.style.display = "flex";
// divContainerEl.style.flexWrap = "wrap";
// divContainerEl.style.gap = "40px 20px";
// divContainerEl.style.justifyContent = "space-between";

// createBtnEl.addEventListener("click", () => {
//   if (
//     Number(valueCountEl.value) > Number(valueCountEl.max) ||
//     Number(valueCountEl.value) < Number(valueCountEl.min)
//   ) {
//     alert("Please, enter a valid value");
//     return;
//   }
//   if (document.body.querySelector(".div-item")) {
//     destroyBoxes();
//   }

//   createBoxes();
// });

// clearBtnEl.addEventListener("click", destroyBoxes);

// function createBoxes(amount = Number(valueCountEl.value)) {
//   ;
//   valueCountEl.value = "";

//   const divArrayEl = [];
//   for (let i = 0; i < amount; i += 1) {
//     divArrayEl[i] = document.createElement("div");
//     divArrayEl[i].classList.add("div-item");
//     divArrayEl[i].style.width = `${30 + i * 10}px`;
//     divArrayEl[i].style.height = `${30 + i * 10}px`;
//     divArrayEl[i].style.backgroundColor = getRandomHexColor();

//     divArrayEl.push(divArrayEl[i]);
//   }

//   divContainerEl.append(...divArrayEl);
// }

// function destroyBoxes() {
//   divContainerEl.innerHTML = "";
// }

//Через инсерт
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEl = document.querySelector("[data-create]");
const clearBtnEl = document.querySelector("[data-destroy]");
const valueCountEl = document.querySelector("#controls input");
const divContainerEl = document.querySelector("#boxes");

divContainerEl.style.listStyle = "none";
divContainerEl.style.display = "flex";
divContainerEl.style.flexWrap = "wrap";
divContainerEl.style.gap = "40px 20px";
divContainerEl.style.justifyContent = "space-between";

createBtnEl.addEventListener("click", () => {
  if (
    Number(valueCountEl.value) > Number(valueCountEl.max) ||
    Number(valueCountEl.value) < Number(valueCountEl.min)
  ) {
    alert("Please, enter a valid value");
    return;
  }
  if (document.body.querySelector(".div-item")) {
    destroyBoxes();
  }
  createBoxes();
});

clearBtnEl.addEventListener("click", destroyBoxes);

function createBoxes(amount = Number(valueCountEl.value)) {
  valueCountEl.value = "";

  let divStringEl = "";

  for (let i = 0; i < amount; i += 1) {
    divStringEl += `<div class="div-item" style='width: ${
      30 + i * 10
    }px; height: ${
      30 + i * 10
    }px; background-color: ${getRandomHexColor()}'></div>`;
  }

  divContainerEl.insertAdjacentHTML("beforeend", divStringEl);
  // divContainerEl.innerHTML = divStringEl;
}

function destroyBoxes() {
  divContainerEl.innerHTML = "";
}
