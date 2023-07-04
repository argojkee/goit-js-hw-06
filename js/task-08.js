const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formTargetEl = event.currentTarget;
  const newUser = {
    email: formTargetEl.email.value,
    password: formTargetEl.password.value,
  };
  if (newUser.email && newUser.password) {
    console.log(newUser);
    formEl.reset();
  } else {
    alert("All fields must be filled");
  }
}
