function VerificarIMC() {
    for (let index = 0; index < 5; index++) {
      var nome = prompt("Digite seu nome: ");
      var peso = prompt("Digite seu peso em Kg: ");
      var altura = prompt("Digite a sua altura em M: ");
      const res = document.getElementById("res");
      const imc = peso / (altura * altura);
  
      if (imc < 18.5) {
        res.innerHTML += `${nome} está abaixo do peso.<br>`;
      } else if (imc < 25) {
        res.innerHTML += `${nome} está com o peso normal.<br>`;
      } else if (imc < 30) {
        res.innerHTML += `${nome} está com sobrepeso.<br>`;
      } else {
        res.innerHTML += `${nome} está com obesidade.<br>`;
      }
    }
  }