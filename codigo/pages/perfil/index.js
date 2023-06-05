const userInfo = JSON.parse(localStorage.getItem("userLoggedIn"))
let currentAccount = []

const emailSpan = document.getElementById("email-span")
const userNameSpan = document.getElementById("user-name")

const inputEmail = document.getElementById("email")
const inputFirstName = document.getElementById("name")
const inputLastName = document.getElementById("lastName")

function setFields(email, name, lastName) {
  userNameSpan.textContent = `${name + " " + lastName}`
  emailSpan.textContent = email
  inputEmail.value = email
  inputFirstName.value = name
  inputLastName.value = lastName
}

function loadProfile() {
  setFields(userInfo.email, userInfo.name, userInfo.lastName)
}
