const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formTargetEl = event.currentTarget.elements;
  const email = formTargetEl.email.value;
  const password = formTargetEl.password.value;

  const newUser = {
    email,
    password,
  };

  if (newUser.email && newUser.password) {
    console.log(newUser);
    formEl.reset();
  } else {
    alert("All fields must be filled");
  }
}
