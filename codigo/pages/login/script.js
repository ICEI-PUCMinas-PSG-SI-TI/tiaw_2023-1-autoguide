const emailList = [
  "email@example.com",
  "email2@example.com",
  "email3@example.com",
]
const passwordList = ["12345", "54321", "23042003"]

const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = document.getElementById("email")
  const password = document.getElementById("password")

  if (
    emailList.indexOf(email.value) !== -1 &&
    passwordList.indexOf(password.value) !== -1
  ) {
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
      title: "Erro ao realizar o Log-In, tente novamente",
    })
  }
})
