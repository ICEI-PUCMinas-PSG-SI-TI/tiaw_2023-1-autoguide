let getAccounts = JSON.parse(localStorage.getItem("accounts"));
let dados = [
  {
    name: "João",
    lastName: "Sem Braço",
    email: "joao@gmail.com",
    password: "12345",
    phone: "31999999999",
    address1: "Rua dos bobos",
    address2: "Nº 0",
    pais: "BR",
    estado: "MG",
    veiculos: [
      {
        placa: "BRA2E19",
        marca: "Renault",
        modelo: "Duster 2015",
        KmLR: "10",
        KmAtual: "100",
        DataCadastro: [20, 1, 2023],
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
    pais: "",
    estado: "",
    veiculos: [
      {
        placa: "Fiat",
        marca: "Palio",
        modelo: "Duster 2015",
        KmLR: "1000",
        KmAtual: "10000",
        DataCadastro: [20, 12, 2012],
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
    pais: "",
    estado: "",
    veiculos: [
      {
        placa: "QOZ-1774",
        marca: "Ford",
        modelo: "Mustang Mach 1",
        KmLR: "10",
        KmAtual: "100",
        DataCadastro: [10, 6, 2018],
      },
    ],
  },
];

function setFakeData() {
  if (!getAccounts) {
    localStorage.setItem("accounts", JSON.stringify(dados));
  }
}

export { setFakeData };
