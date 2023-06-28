/*Dado el arreglo [3, 50, 70, 600, 40]:
1.	Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos
2.	Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3
3.	Use ciclo while para recorrer el arreglo e imprimir todos sus elementos
4.	Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos son pares
 */

let arreglo = [3, 50, 70, 600, 40];

arreglo.forEach(index => {
    console.log(index);
});

arreglo = [3, 50, 70, 600, 40];

arreglo.forEach(index => {
    console.log(index*3);
});

arreglo = [3, 50, 70, 600, 40];
let index=0;

while (index < arreglo.length) {
    console.log(arreglo[index]);
    index++;
}

arreglo = [3, 50, 70, 600, 40];

for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index] % 2==0) {
        console.log(arreglo[index]);
    } 
}