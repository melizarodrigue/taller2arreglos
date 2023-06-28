/*9.	Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable contadora
(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo. Como sugerencia, 
se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora. */

let arreglo = [true, true, false, true, false, false];
let contador=0;
let index=0;

while (index < arreglo.length) {
    if (arreglo[index]==false) {
        contador++;
    }
    index++;
}
console.log(contador);

