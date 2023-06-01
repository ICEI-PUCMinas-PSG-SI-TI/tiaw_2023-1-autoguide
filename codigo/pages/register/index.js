import { showAlert, icons } from "../utils/alert.js"

// BOOTSTRAP VALIDATION
// Example starter JavaScript for disabling form submissions if there are invalid fields
;(function () {
  "use strict"

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation")

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add("was-validated")
      },
      false
    )
  })
})()

let getAccounts = JSON.parse(localStorage.getItem("accounts"))

if (getAccounts) {
  var account = getAccounts
} else {
  account = []
}

// Register Button
const registerForm = document.getElementById("register-form")

// Form fields
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

function checkUserAlreadyExists() {
  for (let index = 0; index < account.length; index++) {
    const element = account[index]

    if (element.email == email.value) {
      return true
    }
  }
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const accountType = {
    name: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  }

  if (checkUserAlreadyExists()) {
    showAlert(
      "Erro ao realizar o cadastro, usuário/email já existente...",
      icons.ERROR,
      "top-end"
    )
  } else {
    if (password.value != confirmPassword.value) {
      showAlert(
        "Senhas não conferem, tente novamente!",
        icons.SUCCESS,
        "top-end"
      )
    } else {
      if (registerForm.checkValidity()) {
        account.push(accountType)
        localStorage.setItem("accounts", JSON.stringify(account))
        showAlert(
          "Sucesso ao relizar o cadastro, redirecionando...",
          icons.SUCCESS,
          "top-end"
        )
        setTimeout(() => {
          window.location.replace("/codigo/pages/login/login.html")
        }, 3000)
      } else {
        showAlert(
          "Erro ao realizar o Login, verifique se há campos vazios e tente novamente",
          icons.ERROR,
          "top-end"
        )
      }
    }
  }
})
