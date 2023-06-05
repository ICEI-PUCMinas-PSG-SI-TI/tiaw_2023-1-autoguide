import { showAlert, icons } from "../utils/alert.js"

let getAccounts = JSON.parse(localStorage.getItem("accounts"))

const loginForm = document.getElementById("login-form")

function verifyAccount(email, password) {
  for (let index = 0; index < getAccounts.length; index++) {
    const element = getAccounts[index]
    if (element.email == email && element.password == password) {
      return true
    }
  }
}


loginForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  if (verifyAccount(email, password)) {
    showAlert(
      "Sucesso ao relizar o login, redirecionando...",
      icons.SUCCESS,
      "top-end"
    )

    setTimeout(() => {
      window.location.replace("/codigo/pages/home/home.html")
    }, 3000)
  } else {
    showAlert(
      "Senha ou e-mail incorretos! Tente novamente...",
      icons.ERROR,
      "top-end"
    )
  }
})
