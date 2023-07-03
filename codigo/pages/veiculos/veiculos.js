const userInfo = JSON.parse(localStorage.getItem("userLoggedIn"));
var getAccounts = JSON.parse(localStorage.getItem("accounts"));
var article = document.getElementById("veiculo-form");

window.onload = () => {
  for (let i = 0; i < getAccounts.length; i++) {
    if (getAccounts[i].email == userInfo.email) {
      for (let x = 0; x < getAccounts[i].veiculos.length; x++) {
        article.innerHTML += `
        <form>
          <h3>Veículo ${i + 1}</h3>
          <label for="placa1">Placa:</label>
          <input type="text" id="placa1" name="placa1" value="${
            getAccounts[i].veiculos[x].placa
          }">
  
          <label for="marca1">Marca:</label>
          <input type="text" id="marca1" name="marca1" value="${
            getAccounts[i].veiculos[x].marca
          }">
  
          <label for="modelo1">Modelo:</label>
          <input type="text" id="modelo1" name="modelo1" value="${
            getAccounts[i].veiculos[x].modelo
          }">
  
          <label for="ano1">Quilometragem da última revisão:</label>
          <input type="text" id="ano1" name="ano1" value="${
            getAccounts[i].veiculos[x].KmLR
          }">
  
          <label for="quilometragem1">Quilometragem atual:</label>
          <input type="text" id="quilometragem1" name="quilometragem1" value="${
            getAccounts[i].veiculos[x].KmAtual
          }">
  
        </form>`;
      }
    }
  }
};
