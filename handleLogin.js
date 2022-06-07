const userName = document.querySelector(".userName");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");

// userName: admin
// password: admin

submit.onclick = (e) => {
  e.preventDefault();
  if (userName.value == "" || password.value == "") {
    alert("You must fill all field!");
  } else {
    if (userName.value !== "admin" || password.value !== "admin") {
      alert("User name or password incorrect!");
    } else {
      window.location = "mealPage.html";
    }
  }
};
