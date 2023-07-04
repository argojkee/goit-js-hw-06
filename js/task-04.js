const btnIncrEl = document.querySelector('[data-action="increment"]');
const btnDecrEl = document.querySelector('[data-action="decrement"]');
const counterValueEl = document.querySelector("#value");

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

btnIncrEl.addEventListener("click", () => {
  counterValue.increment();
  changeValue();
});

btnDecrEl.addEventListener("click", () => {
  counterValue.decrement();
  changeValue();
});

function changeValue() {
  counterValueEl.textContent = counterValue.value;
}
