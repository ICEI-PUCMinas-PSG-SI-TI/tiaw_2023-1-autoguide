function calcularProximaRevisao() {
  // Obter a data e quilometragem da última revisão do carro
  const lastRevisionDate = new Date(
    document.getElementById("last-revision-date").value
  )
  const lastRevisionMileage = parseInt(
    document.getElementById("last-revision-mileage").value
  )

  // Obter a quilometragem atual do veículo
  const currentMileage = parseInt(
    document.getElementById("current-mileage").value
  )

  // Calcular a data da próxima revisão com base no intervalo de tempo e quilometragem
  const dozeMesesEmMS = 12 * 30 * 24 * 60 * 60 * 1000
  let proximaRevisao

  if (currentMileage - lastRevisionMileage >= 10000) {
    proximaRevisao = "A próxima revisão deve ser feita em até 10.000 km."
  } else if (
    new Date().getTime() - lastRevisionDate.getTime() >=
    dozeMesesEmMS
  ) {
    proximaRevisao = "A próxima revisão deve ser feita em até 12 meses."
  } else {
    const mesesRestantes = Math.round(
      (dozeMesesEmMS - (new Date().getTime() - lastRevisionDate.getTime())) /
        (30 * 24 * 60 * 60 * 1000)
    )
    proximaRevisao = `A próxima revisão deve ser feita em ${mesesRestantes} meses ou ${
      10000 - (currentMileage - lastRevisionMileage)
    } km.`
  }

  // Exibir a data da próxima revisão na tela
  document.getElementById("proxima-revisao").textContent = proximaRevisao
}
