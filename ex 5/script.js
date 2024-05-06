function ComprarCarro() {
    const carro = prompt("Digite o modelo de carro desejado: ");
  
    switch (carro) {
      case "hatch":
        document.getElementById("res").innerHTML = "Compra efetuada com sucesso"
        break;
      case "sedan":
        document.getElementById("res").innerHTML = "Tem certeza de que não prefere um modelo hatch?"
        break;
      case "motocicleta":
        document.getElementById("res").innerHTML = "Tem certeza de que não prefere um modelo hatch?"
        break;
      case "caminhonete":
        document.getElementById("res").innerHTML = "Tem certeza de que não prefere um modelo hatch?"
        break;
      default:
        document.getElementById("res").innerHTML = "Não trabalhamos com este tipo de automóvel aqui"
        break;
    }
  }
  