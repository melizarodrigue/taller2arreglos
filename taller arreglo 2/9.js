/*9.	Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un promedio mayor 
de sus elementos. Se le debe pedir al usuario que introduzca los arreglos. */

function proM(arreglo1, arreglo2) {
    let promedio1 = calcularPromedio(arreglo1);
    let promedio2 = calcularPromedio(arreglo2);

    if (promedio1 > promedio2) {
        console.log("El primer arreglo tiene un promedio mayor:", promedio1);
    } else if (promedio2 > promedio1) {
        console.log("El segundo arreglo tiene un promedio mayor:", promedio2);
    } else {
        console.log("Ambos arreglos tienen el mismo promedio:", promedio1);
    }
}



function calcularPromedio(arreglos) {
    let suma = 0;

    for (let index = 0; index < arreglos.length; index++) {
        suma += arreglos[index];
    }

    return suma / arreglos.length;
}

let AR1 = prompt("Ingrese los elementos del arreglo separados por comas:");
let AR2 = prompt("Ingrese los elementos del arreglo separados por comas:");

let arreglo1 = [];
let arreglo2 = [];

let numeroActual1 = "";
for (let i = 0; i < AR1.length; i++) {
    if (AR1[i] !== ",") {
        numeroActual1 += AR1[i];
    } else {
        arreglo1.push(parseFloat(numeroActual1));
        numeroActual1 = "";
    }
}
arreglo1.push(parseFloat(numeroActual1));

let numeroActual2 = "";
for (let i = 0; i < AR2.length; i++) {
    if (AR2[i] !== ",") {
        numeroActual2 += AR2[i];
    } else {
        arreglo2.push(parseFloat(numeroActual2));
        numeroActual2 = "";
    }
}
arreglo2.push(parseFloat(numeroActual2));

proM(arreglo1, arreglo2);

