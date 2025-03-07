// Exercício01
let nome ="Gabriel";
let maiuscula = nome.toUpperCase();
let minuscula = nome.toLocaleLowerCase();
console.log(maiuscula)
console.log(minuscula)

let inverso = nome.split('').reverse('').join('');
let AE = nome.replace("A" && "a" , "e");
console.log(inverso);

//exercício02
 let a = 10; 
 let b = 5;
 let soma = a + b;
 let substração = a - b;
 let multiplicação = a * b;
 let divisão = a / b;
 let maior = a > b;
 
 //Exerício03 
 let idade = 19;

 if(idade >= 20){
    console.log("Maior de idade")
 }
 else if(idade>=65){
    console.log("Idosa")
 }
 else{
    console.log("Menor de idade")
 }

 //Exercício04

 for(i=0; i<=100; i++){
    console.log(i)
 }

 //Exercício05
function dobro(x){         // dobro
    return numero = x * 2;
}
console.log(dobro(5));

function triplo(x){        // triplo
           return numero = x * 3;
}

function quadrado(x){       //quadrado
return numero = x ** 2;
}
console.log(quadrado(5));

//exercício06

let numeros = [ 10, 20, 30, 40 ,50];
numeros.push(60);
numeros.pop();