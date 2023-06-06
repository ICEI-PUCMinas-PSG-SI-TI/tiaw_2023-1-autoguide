let UsuarioLogado;
let UserLogado= false;
//Verifica se o usuário está logado
$("document").ready(() => {
  let userlogado =  JSON.parse(localStorage.getItem("userLoggedIn"));
  if (userlogado) {
    UsuarioLogado = userlogado;
    UserLogado = true;
  } else {
    alert("Não há usuário logado"); //Imprime uma mensagem de erro
    setTimeout(function () {
      window.location.href = "/codigo/pages/login/login.html";
    }, 3000);
  } //Redireciona para a página de login
});

function calcularProximaRevisao() {
  // Obter a data e quilometragem da última revisão do carro
  const lastRevisionDate = new Date(
    document.getElementById("last-revision-date").value
  );
  const lastRevisionMileage = parseInt(
    document.getElementById("last-revision-mileage").value
  );

  // Obter a quilometragem atual do veículo
  const currentMileage = parseInt(
    document.getElementById("current-mileage").value
  );

  // Calcular a data atual
  const currentDate = new Date();

  // Calcular a data da próxima revisão com base no intervalo de tempo e quilometragem
  const dozeMesesEmMS = 12 * 30 * 24 * 60 * 60 * 1000;

  // Calcular os meses restantes para a próxima revisão
  const mesesRestantes = 12 - currentDate.getMonth();

  let proximaRevisao;

  if (currentMileage < lastRevisionMileage) {
    proximaRevisao =
      "A quilometragem atual não pode ser menor do que a última revisão.";
    document.getElementById("proxima-revisao").classList.add("blinking");
  } else if (lastRevisionDate > currentDate) {
    proximaRevisao = "A data informada é maior do que a data atual.";
    document.getElementById("proxima-revisao").classList.add("blinking");
  } else if (currentMileage - lastRevisionMileage >= 10000) {
    proximaRevisao = "Cuidado! É necessário realizar uma manutenção urgente!";
    document.getElementById("proxima-revisao").classList.add("blinking");
  } else if (currentDate - lastRevisionDate >= dozeMesesEmMS) {
    proximaRevisao =
      "A última revisão foi feita há muito tempo. É necessário realizar uma manutenção urgente";
    document.getElementById("proxima-revisao").classList.add("blinking");
  } else {
    proximaRevisao = `A próxima revisão deve ser feita em ${mesesRestantes} meses ou ${
      10000 - (currentMileage - lastRevisionMileage)
    } km.`;
    document.getElementById("proxima-revisao").classList.remove("blinking");
  }

  // Remover a classe "blinking" após 3 segundos
  setTimeout(function () {
    document.getElementById("proxima-revisao").classList.remove("blinking");
  }, 2000);

  // Exibir a data da próxima revisão na tela
  document.getElementById("proxima-revisao").textContent = proximaRevisao;
}

// Igor Lucas Assunção Ribas
document
  .getElementById("BtnCadastroVeiculo")
  .addEventListener("click", function () {
    //DECLARAÇÃO DE VARIÁVEIS
    const Placa = document.getElementById("placa").value;
    const Marca = document.getElementById("marca").value;
    const Modelo = document.getElementById("modelo").value;
    const KmLR = document.getElementById("last-revision-mileage").value;
    const KmAtual = document.getElementById("current-mileage").value;

    var dataAtual = new Date();
    var ano = dataAtual.getFullYear();
    var mes = dataAtual.getMonth() + 1; // Os meses são indexados a partir de zero, por isso é necessário adicionar 1
    var dia = dataAtual.getDate();

    var Veiculos; // vetor de objetos veiculos

    if (
      Placa == "" ||
      Marca == "" ||
      Modelo == "" ||
      KmLR == "" ||
      KmAtual == ""
    ) {
      //Insira aqui o código para exibir uma mensagem de erro
    } else {
      Veiculos = {
        placa: Placa,
        marca: Marca,
        modelo: Modelo,
        KmLR: KmLR,
        KmAtual: KmAtual,
        DataCadastro: [dia, mes, ano],
      }; // cria o objeto veículos

      let getAccounts = JSON.parse(localStorage.getItem("accounts")); //pega o objeto account do loc_alstorage

      if (getAccounts) {
        //Veridica se o objeto account existe
        var accounts = getAccounts;
      } else {
        //Mensagem de erro dizedo que ainda não esta cadastrado
        //Redirecione para a página de cadastro de usuário
        //Erro crítico
        //Usei pra testes
        accounts = []; //Cria o vetor de usuários
      }
      let veiculo_repetido = verificaveiculo(accounts, Veiculos)[0];
      if (veiculo_repetido) {
        //O veículo já está cadastrado e terá seus valores alterados
        let tamanho = accounts.length - 1;
        let index = verificaveiculo(accounts, Veiculos)[1];
        for (i = 0; i < index.length; i++) {
          accounts[tamanho].veiculos[index] = Veiculos; //Altera os valores de todos os veiculos com a mesma placa
        }
        localStorage.setItem("accounts", JSON.stringify(accounts));
      } else {
        let tamanho = accounts.length - 1;
        accounts[tamanho].veiculos.push(Veiculos);
        localStorage.setItem("accounts", JSON.stringify(accounts)); //Finaliza a função e salva o objeto accounts no localstorage
      }
    }
  });

function verificaveiculo(accounts, Veiculos) {
  //função para verificar se o veículo já está cadastrado
  let getAccounts = JSON.parse(localStorage.getItem("accounts")); //pega o objeto account do localstorage
  if (getAccounts) {
    //verifica se o objeto account existe
    accounts = getAccounts;
    for (let i = 0; i < accounts.length; i++) {
      for (let x = 0; x < accounts[i].veiculos.length; x++) {
        if (accounts[i].veiculos[x].placa == Veiculos.placa) {
          var veiculo_jaexistente = true;
          var index = [];
          index.push(x);
        }
      }
    }
  }
  return [veiculo_jaexistente, index];
}
