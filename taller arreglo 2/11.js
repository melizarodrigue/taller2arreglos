/*11.	Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos númerosimpares 
posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo. */

function impares() {

    let numeros = 0;
    let array = [];
    let contador = 0;

    for (let index = 0; index < 2; index++) {
        numeros = parseInt(prompt("ing num"));
        array.push(numeros);
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 != 0) {
                contador++;
            }
        }
    }
    return array;
}
console.log("hay " + contador + " numeros impares");
impares()