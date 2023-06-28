/*8.	Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. 
Se le debe pedir al usuario que introduzca el arreglo. */

let arreglo = [3, 4, 6, 50, 8, 10];
let mayor = arreglo[0];

function numeros() {

    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] > mayor) {
            mayor = arreglo[index];
        }

    }
    return mayor;
}


numeros();