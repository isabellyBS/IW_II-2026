//1
alert("Seja bem-vindo!");

//2
let nome = prompt("Qual é seu nome?????");
alert("Tudo 👍" + nome + "?");

//3
let idade = prompt("Quantos anos vc tem, velha?");

if (parseFloat(idade)>=18) {
    console.log("Você é velha(o)    (tem 18 ou mais)");
} else {
    console.log("Surpreendentemente nao nasceu ainda! (menor de idade)");
};

//4
let resposta = confirm("Você quer proseguir?");
if (resposta) {
    alert("Você escolheu iei continuaremous!!😁");
} else {
    alert("nao, obrigada, continuaremous di qualquer jeito ieiii🤬🤬 ");
}

//5
let num1 = prompt("fale um numeru");
let num2 = prompt("Digite outro número.")

let soma= parseFloat(num1) + parseFloat(num2)
alert("A soma deles é " + soma )

//6
let numero = prompt("digiti um numeru!");
alert(numero*2)

//7
let pergunta = confirm("Só para confirmar, seu nome é"+nome+" e sua idade "+idade+" né?")
if (pergunta) {
    alert("Ok, obrigada por responder :)")
} else {
    alert("Ata, desculpa... 👋até uma próxima.")
}