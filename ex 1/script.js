function verificarNumero(){
    let num = parseFloat(prompt("Digite um número:"));

    if (num > 0){
        document.getElementById("res").innerHTML = "O número " + num + " é positivo";
    }

    else if (num <0){
        document.getElementById("res").innerHTML = "O número " + num + " é negativo.";
    }

    else if (num ==0){
        document.getElementById("res").innerHTML = "O número digitado é zero."
    }
    else{
        document.getElementById("res").innerHTML = "digite um numero válido"
    }
}