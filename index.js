// ATIVIDADES PRÁTICAS 01

alert ("Boas vindas ao nosso site!");

let nome01 = "Lua";
console.log(nome01);

let idade01 = 25;
console.log(idade01);

let numeroDeVendas = 25;
console.log(numeroDeVendas);

let saldoDisponivel = 1000;
console.log(saldoDisponivel);

alert("Erro! Preencha todos os campos");

let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

nome02 = prompt("Digite seu nome");

idade02 = prompt("Digite sua idade");

let habilitacao = prompt("Digite sua idade");
    if (habilitacao >= 18) {
        alert("Pode tirar a habilitação!");
    }

// ATIVIDADES PRÁTICAS 02

// 1. Pergunte ao usuário qual é o dia da semana:
// - Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
// - Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Qual é o dia da semana?");
if (diaDaSemana == "Sábado") {
    alert("Bom fim de semana!");
} else if (diaDaSemana == "Domingo") {
    alert ("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numeroPositivo = prompt('Digite um número positivo ou negativo');
if (numeroPositivo > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

let parImpar = prompt("Digite um número");
let total = (parImpar%2)
if (parImparTotal == 0) {
    alert("Seu número é par");
} else if (parImparTotal == 1) {
    alert("Seu número é ímpar");
}

// 3. Crie um sistema de pontuação para um jogo. 
// Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
// Caso contrário, mostre "Tente novamente para ganhar.".
let numeroCerto = prompt("Digite um número");
if (numeroCerto < 100) {
    alert("Tente novamente para ganhar.");
} else if (numeroCerto >= 100) {
    alert("Parabéns, você venceu!");
}

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 500;
alert(`Seu saldo é de R$${saldoConta}.`);

// 5. Peça ao usuário para inserir seu nome usando prompt. 
// Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome03 = prompt("Digite seu nome.");
alert(`Olá ${nome03}, lhe desejamos boas-vindas.`);


// ATIVIDADES PRÁTICAS 03

// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador01 = 0;
let tentativas01 = 1;
while (contador01 < 10){
   console.log(contador01 = tentativas01);
   tentativas01++;
}

    // let contador = 1;
    // while (contador <= 10) {
    //     console.log(contador);
    //     contador++;
    // }

// 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador02 = 10;
let tentativas02 = contador02;
while (contador02 > 0){
   console.log(contador02 = tentativas02);
   tentativas02--;
}

    //    let contador = 10;
    //    while (contador >= 0) {
    //        console.log(contador);
    //        contador--;
    //    }

// 3. Crie um programa de contagem regressiva. 
//    Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contador03 = prompt("Digite um número");
let tentativas03 = contador03;
while (contador03 > 0){
   console.log(contador03 = tentativas03);
   tentativas03--;
}
    //let numeroMaximo = prompt("Digite um número para a contagem regressiva:");
    //
    //while (numeroMaximo >= 0) {
    //    console.log(numeroMaximo);
    //    numeroMaximo--;
    //}

// 4. Crie um programa de contagem progressiva. 
//    Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador04 = 0;
while (contador04 <= numeroMaximo) {
console.log(contador04);
contador04++
}


// ATIVIDADES PRÁTICAS 02

// 01. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Boas vindas");

// 02. Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
    let nome04 = "Rafael";
    console.log(`Olá, ${nome04}!`);

// 03. Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
    let meuNome = "Rafael";
    alert(`Olá, ${meuNome}!`);

// 04. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
    let perguntaLinguagem = prompt("Qual a linguagem de programação que você mais gosta?");
    console.log(perguntaLinguagem);

// 05. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
    let valor1 = 5;
    let valor2 = 10;
    let somar = valor1 + valor2;
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${somar}`);

// 06. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
    let valor01 = 25;
    let valor02 = 5;
    let subtrair = valor01 - valor02;
    console.log(`A diferença entre ${valor01} e ${valor02} é igual a ${subtrair}`);

// 07. Peça ao usuário para inserir sua idade com prompt. 
// Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
    let idade03 = prompt("Digite sua idade:");
    if(idade03 >= 18){
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.")
    }

// 08. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.
    let numeroZero = prompt("Digite um número:");
    // var numero = parseFloat(prompt("Digite um número:"));
    if(numeroZero == 0){
        console.log("Seu número é ZERO.");
        } else if (numeroZero > 0) {
            console.log("Seu número é positivo.");
        } else {
            console.log("Seu número negativo"); 
        }

// 09. Use um loop while para imprimir os números de 1 a 10 no console.
    let loopWhile = 1;
    while (loopWhile <= 10){
    console.log(loopWhile);
    loopWhile++;
    }

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. 
// Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
    let nota = 8;
    if (nota >=7){
        console.log("Aprovado.");
    } else {
        console.log("Reprovado.");
    }

// 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
    let numeroAleatorio = Math.random();
    console.log(numeroAleatorio);

// 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
    let numero1a10 = parseInt(Math.random()*10) + 1;
    console.log(numero1a10);

// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
    let numero1a1000 = parseInt(Math.random()*1000) + 1;
    console.log(numero1a1000);

