const userInfo = JSON.parse(localStorage.getItem("userLoggedIn"));

var getAccounts = JSON.parse(localStorage.getItem("accounts"));

const emailSpan = document.getElementById("email-span");
const userNameSpan = document.getElementById("user-name");

// inpuit fields do usuário logado, informações básicas
const inputEmail = document.getElementById("email");
const inputFirstName = document.getElementById("name");
const inputLastName = document.getElementById("lastName");
//input fields atualizáveis
const inputPhone = document.getElementById("phone");
const inputAddress1 = document.getElementById("address1");
const inputAddress2 = document.getElementById("address2");
const inputPais = document.getElementById("country");
const inputEstado = document.getElementById("state");

const btn_salvar = document.getElementById("btn-salvar");

//funções para inserir os dados já existentes na tela
function setFields(email, name, lastName) {
  userNameSpan.textContent = `${name + " " + lastName}`;
  emailSpan.textContent = email;
  inputEmail.value = email;
  inputFirstName.value = name;
  inputLastName.value = lastName;

  for (let i = 0; i < getAccounts.length; i++) {
    //Percorre o vetor de contas e procura a conta do usuário logado
    if (getAccounts[i].email == userInfo.email) {
      inputPhone.value = getAccounts[i].phone;
    }
    if (getAccounts[i].address1 != "") {
      inputAddress1.value = getAccounts[i].address1;
    }
    if (getAccounts[i].address2 != "") {
      inputAddress2.value = getAccounts[i].address2;
    }
    if (getAccounts[i].pais != "" && getAccounts[i].estado != "") {
      inputPais.value = getAccounts[i].pais;
      inputEstado.value = getAccounts[i].estado;
    }
  }
}

window.onload = () => {
  setFields(userInfo.email, userInfo.name, userInfo.lastName);
};

//função para efetuar possível mudança nos dados
btn_salvar.addEventListener("click", () => {
  Swal.fire({
    title: "Você deseja salvar as mudanças?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Salvar",
    denyButtonText: `Não salvar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      setDados();
    } else if (result.isDenied) {
      Swal.fire("As mudanças não foram salvas", "", "info");
    }
  });
});
function setDados() {
  for (let i = 0; i < getAccounts.length; i++) {
    //Percorre o vetor de contas e procura a conta do usuário logado

    if (
      inputEmail.value == "" ||
      inputFirstName.value == "" ||
      inputLastName.value == ""
    ) {
      Swal.fire("As mudanças não foram salvas", "", "info");
    } else if (!verificaArroba()) {
      Swal.fire("As mudanças não foram salvas", "", "info");
    } else {
      Swal.fire("As mudanças foram salvas!", "", "success");
      if (getAccounts[i].email == userInfo.email) {
        //Fazer os IFs e elses para cada campo
        getAccounts[i].phone = inputPhone.value;
        getAccounts[i].address1 = inputAddress1.value;
        getAccounts[i].address2 = inputAddress2.value;
        getAccounts[i].pais = inputPais.value;
        getAccounts[i].estado = inputEstado.value;
        getAccounts[i].email = inputEmail.value;
        getAccounts[i].name = inputFirstName.value;
        getAccounts[i].lastName = inputLastName.value;
        userInfo.email = inputEmail.value;
        userInfo.name = inputFirstName.value;
        userInfo.lastName = inputLastName.value;

        localStorage.setItem("userLoggedIn", JSON.stringify(userInfo));
        localStorage.setItem("accounts", JSON.stringify(getAccounts));
      }
    }
  }
  setTimeout(() => {
    window.location.reload();
  }, 1500);
}

function verificaArroba() {
  let bool = false;
  let cont = 0;
  for (let i = 0; i < inputEmail.value.length; i++) {
    if (inputEmail.value[i] == "@") {
      cont++;
    }
  }
  if (cont == 1) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}
