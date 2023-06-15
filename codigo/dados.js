let getAccounts = JSON.parse(localStorage.getItem("accounts"))
let dados = [
  {
    name: "João",
    lastName: "Sem Braço",
    email: "joao@gmail.com",
    password: "12345",
    phone: "",
    address1: "",
    address2: "",
    veiculos: [
      {
        plate: "",
        brand: "",
        model: "",
      },
    ],
  },
  {
    name: "Pedro",
    lastName: "Henrique",
    email: "pedro@gmail.com",
    password: "54321",
    phone: "",
    address1: "",
    address2: "",
    veiculos: [
      {
        plate: "",
        brand: "",
        model: "",
      },
    ],
  },
  {
    name: "Lucas",
    lastName: "Lima",
    email: "lucas@gmail.com",
    password: "678910",
    phone: "",
    address1: "",
    address2: "",
    veiculos: [
      {
        plate: "",
        brand: "",
        model: "",
      },
    ],
  },
]

function setFakeData() {
  if (!getAccounts) {
    localStorage.setItem("accounts", JSON.stringify({ dados }))
  }
}

export { setFakeData }
