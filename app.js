var numeroSorteado = [];
var numeroLimite = 10;
var numeroSecreto = gerarNumeroAleatorio();
var tentativas = 1;

function exibirNaTela(tag, texto) {
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function mensagemInicial(){
    exibirNaTela('h1' , 'Desafio do número secreto');
    exibirNaTela('p', 'Escolha um número de 1 à 10');
}

mensagemInicial();

function verificarChute(){
    var chute = document.querySelector('input').value

    if(chute == numeroSecreto) {
        exibirNaTela('h1' , 'Acertou!');
        var palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        var mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`
        exibirNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled')
        
    } else{
        if(chute > numeroSecreto) {
            exibirNaTela('p', 'O número secreto é menor')
        } else{
            exibirNaTela('p', 'O número secreto é maior')
        }
        tentativas++;
        limparNome()
    }
}

function gerarNumeroAleatorio() {
    var numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
    var quantidadeDeElementosNaLista = numeroSorteado.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        numeroSorteado = [];
    }
    if(numeroSorteado.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
    } else {
        numeroSorteado.push(numeroEscolhido);
        console.log(numeroSorteado)
        return numeroEscolhido;
    }

}

function limparNome (){
    chute = document.querySelector('input')
    chute.value = '';
}



function reiniciarJogo(){

    numeroSecreto=gerarNumeroAleatorio();
    limparNome();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' ,true);
}











 

