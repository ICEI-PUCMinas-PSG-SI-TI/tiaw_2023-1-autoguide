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
