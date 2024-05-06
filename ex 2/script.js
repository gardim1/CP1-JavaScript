function verificarIdade(){
    let num = parseInt(prompt("Digite um número:"));

    if (num >=18 && num <=70){
        document.getElementById("res").innerHTML = "Seu voto é obrigatorio"
    }
    else if(num >=16 && num<18 || num > 70){
        document.getElementById("res").innerHTML = "Seu voto é facultativo"
    }
    else{
        document.getElementById("res").innerHTML = "Voce nao pode votar"
    }
}