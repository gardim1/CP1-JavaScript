function VerificarFrutas() {
    const fruta = prompt("Digite o nome de uma fruta: ");
  
    switch (fruta) {
      case "maçã":
        document.getElementById("res").innerHTML = "Nao vendemos essa fruta aqui"
        break;
      case "banana":
        document.getElementById("res").innerHTML = "Estamos com escassez de banana"
        break;
      case "melancia":
        document.getElementById("res").innerHTML = "Aqui está, são 3 reais o quilo"
        break;
      default:
        document.getElementById("res").innerHTML = "esta fruta não faz parte das frutas que me interessam"
        break;
    }
  }
  