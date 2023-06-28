/* 7. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,“Banano”, “Lechuga”, 
    “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y verduras) queden en el arreglo que les 
    corresponden. Usa ciclos. */

let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];
let elemento = 0;

for (let i = 0; i < arreglo1.length; i++) {
    elemento = arreglo1[i];

    // Verificar si es una fruta
    if (elemento === "Pera" || elemento === "Limón" || elemento === "Manzana" || elemento === "Banano") {
        frutas.push(elemento);
    }
    // Verificar si es una verdura
    if (elemento === "Cebolla" || elemento === "Pimentón" || elemento === "Lechuga" || elemento === "Perejíl") {
        verduras.push(elemento);
    }
}

console.log("Frutas:", frutas);
console.log("Verduras:", verduras);

let frutas1 = [];
let verduras1 = [];
let elemento1 = 0;

for (let i = 0; i < arreglo2.length; i++) {
    elemento1 = arreglo2[i];

    // Verificar si es una fruta
    if (elemento1 === "Pera" || elemento1 === "Limón" || elemento1 === "Manzana" || elemento1 === "Banano") {
        frutas1.push(elemento1);
    }
    // Verificar si es una verdura
    if (elemento1 === "Cebolla" || elemento1 === "Pimentón" || elemento1 === "Lechuga" || elemento1 === "Perejíl") {
        verduras1.push(elemento1);
    }
}

console.log("Frutas:", frutas1);
console.log("Verduras:", verduras1);