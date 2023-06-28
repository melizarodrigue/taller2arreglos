/*8.	Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma 
de los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para 
ver cómo se implementa la variable contadora */

let arreglo = [-2, 8, 99, 1, 7];
let suma=0;
let cuadrado=0;

arreglo.forEach(index => {
    cuadrado= index**2;
    suma = suma+cuadrado;
    console.log(suma);
});