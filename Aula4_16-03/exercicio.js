//1. Par ou Ímpar

//2. Verificação de Maioridade

//3. 

//4.

//5.

//6.

//7.

//8.

//9.

//10.

//11. Cálculo de Fatorial

//12. Validação de Nota
let nota= parseFloat(prompt("Digite um número de 0 a 10."))
while (nota>10 || nota<0) {
    let nota= parseFloat(prompt("DIGITE UM NÚMERO DE 0 ATÉ 10!"))
    if (nota<=10 && nota>=0){
        break
    }
}

//13. Média de Notar
let n1 = prompt("Fale a primeira nota.");
let n2 = prompt("Fale a segunda nota.");
let n3 = prompt("Fale a terceira nota.");

let media= (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3

if (media>=7) {
    alert("a sua média é "+ media +", você foi aprovado!!!!")
} else {
     alert("a sua média é "+ media +", você foi reprovado!")
}

//14. Caixa Eletrônico
let valor=prompt("Fala um valor ai para sacar");

for (valor ; valor>=100; valor=valor-100) {
    console.log(100)
}
for (valor ; valor>=50; valor=valor-50) {
    console.log(50)
}
for (valor ; valor>=20; valor=valor-20) {
    console.log(20)
}
for (valor ; valor>=10; valor=valor-10) {
    console.log(10)
}
for (valor ; valor>=5; valor=valor-5) {
    console.log(5)
}
for (valor ; valor>=2; valor=valor-2) {
    console.log(2)
}
for (valor ; valor>=1; valor=valor-1) {
    console.log(1)
}

//15. Número Ímpares
let secImpar = prompt("Digite um número.")

console.log("Atividade 15");

for (var NuImp = 1; NuImp <= secImpar; NuImp=NuImp+2) {
    console.log(NuImp);
    //alert(NuImp)
}