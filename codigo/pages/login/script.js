import { showAlert, icons } from "../utils/alert.js";
import { setFakeData } from "./dados.js";

let getAccounts;

window.onload = async () => {
  await setFakeData();
  getAccounts = JSON.parse(localStorage.getItem("accounts"));
};

const loginForm = document.getElementById("login-form");

let getCurrentAccount = JSON.parse(localStorage.getItem("userLoggedIn"));

if (getCurrentAccount) {
  window.location.replace("/codigo/pages/home/home.html");
}

function verifyAccount(email, password) {
  for (let index = 0; index < getAccounts.length; index++) {
    const element = getAccounts[index];
    if (element.email == email && element.password == password) {
      if (!getCurrentAccount) {
        const loggedInUserInfo = {
          name: element.name,
          lastName: element.lastName,
          email: element.email,
        };
        localStorage.setItem("userLoggedIn", JSON.stringify(loggedInUserInfo));
      }
      return true;
    }
  }
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (verifyAccount(email, password)) {
    showAlert(
      "Sucesso ao relizar o login, redirecionando...",
      icons.SUCCESS,
      "top-end"
    );
    setTimeout(() => {
      window.location.replace("/codigo/pages/home/home.html");
    }, 3000);
  } else {
    showAlert(
      "Senha ou e-mail incorretos! Tente novamente...",
      icons.ERROR,
      "top-end"
    );
  }
});
