const inputNameEl = document.querySelector("#name-input");
const labelNameEl = document.querySelector("#name-output");

function changeTextContent(event) {
  labelNameEl.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonymous"
      : event.currentTarget.value.trim();
}

inputNameEl.addEventListener("input", changeTextContent);
