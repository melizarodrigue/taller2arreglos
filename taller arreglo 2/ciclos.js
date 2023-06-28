/*1. Dado el arreglo [1,2,3,4,5,6]:
a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
d) Calcular el promedio de todos los elementos del arreglo
 */

let numeros = [1, 2, 3, 4, 5, 6];
let index = 0;

while (index < numeros.length) {
    console.log(numeros[index]);
    index++;
}

//

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}

//

let copiaArreglo = [];

for (let i = 0; i < numeros.length; i++) {
    copiaArreglo.push(numeros[i] + 1);
}

console.log(copiaArreglo);

//+


//let numeros = [1, 2, 3, 4, 5, 6];
let suma = 0;
for (let index = 0; index < numeros.length; index++) {
    suma += numeros[index];
}

console.log("el promedio de los numeroses de ", suma / numeros.length);
