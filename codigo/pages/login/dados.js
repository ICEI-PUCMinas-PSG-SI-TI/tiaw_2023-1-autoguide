let getAccounts = JSON.parse(localStorage.getItem("accounts"))
let dados = [
  {
    name: "João",
    lastName: "Sem Braço",
    email: "joao@gmail.com",
    password: "12345",
    phone: "31999999999",
    address1: "",
    address2: "",
    veiculos: [
      {
        plate: "BRA2E19",
        brand: "Renault",
        model: "Duster 2015",
        year: "2015",
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
        plate: "QRM7E33",
        brand: "Fiat",
        model: "Palio",
        year: "2013",
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
        plate: "QOZ-1774",
        brand: "Ford",
        model: "Mustang Mach 1",
        year: "1969",
      },
    ],
  },
]

function setFakeData() {
  if (!getAccounts) {
    localStorage.setItem("accounts", JSON.stringify(dados))
  }
}

export { setFakeData }
