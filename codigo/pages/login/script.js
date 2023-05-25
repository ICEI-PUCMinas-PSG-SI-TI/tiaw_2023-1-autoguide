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
      title: "Sucesso ao relizar o login, redirecionando...",
    })

    setTimeout(() => {
      window.location.replace("/codigo/pages/home/home.html")
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
      title: "Senha ou e-mail incorretos! Tente novamente...",
    })
  }
})
