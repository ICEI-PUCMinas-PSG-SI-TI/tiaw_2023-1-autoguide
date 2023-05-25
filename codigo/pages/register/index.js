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

registerForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const accountType = {
    name: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  }

  if (password.value != confirmPassword.value) {
    const erroAlert = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (e) => {
        e.addEventListener("mouseenter", Swal.stopTimer)
        e.addEventListener("mouseleave", Swal.resumeTimer)
      },
    })
    erroAlert.fire({
      icon: "error",
      title: "Senhas não conferem, tente novamente!",
    })
  } else {
    if (registerForm.checkValidity()) {
      account.push(accountType)
      localStorage.setItem("accounts", JSON.stringify(account))

      const successAlert = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (e) => {
          e.addEventListener("mouseenter", Swal.stopTimer)
          e.addEventListener("mouseleave", Swal.resumeTimer)
        },
      })
      successAlert.fire({
        icon: "success",
        title: "Sucesso ao relizar o cadastro, redirecionando...",
      })

      setTimeout(() => {
        window.location.replace("/codigo/pages/login/login.html")
      }, 3000)
    } else {
      const erroAlert = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (e) => {
          e.addEventListener("mouseenter", Swal.stopTimer)
          e.addEventListener("mouseleave", Swal.resumeTimer)
        },
      })
      erroAlert.fire({
        icon: "error",
        title:
          "Erro ao realizar o Login, verifique se há campos vazios e tente novamente",
      })
    }
  }
})
