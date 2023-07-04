const inputNameEl = document.querySelector("#name-input");
const labelNameEl = document.querySelector("#name-output");

function changeTextContent(event) {
  if (event.currentTarget.value === "") {
    labelNameEl.textContent = "Anonymous";
  } else {
    labelNameEl.textContent = event.currentTarget.value;
  }
}

inputNameEl.addEventListener("input", changeTextContent);
