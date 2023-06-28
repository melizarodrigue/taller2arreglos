/*1. Valor (1 punto)
a) Dado el arreglo let edades = [20, 16, 19, 17, 20,
18, 22, 17] complete donde aparecen las rayas
( ____ ) para contar y mostrar cuántas edades
dentro del arreglo corresponden a mayores de
edad:*/


let edades = [20, 16, 19, 17, 20, 18, 22, 17]
let mayores = 0;
for (let index = 0; index < edades.length; index++) {
 if (edades[index] >= 18){
    mayores++;
 }
}
console.log(mayores)