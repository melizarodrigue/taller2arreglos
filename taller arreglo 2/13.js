/*13.	Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de menor a 
mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo. */

function NumerosOrdenados() {
    let array = [];
    let total = parseInt(prompt("Ingrese la cantidad de usuarios:"));

    for (let index = 0; index < total; index++) {
        const numeros = parseInt(prompt("Ingrese los numeros"));
        array.push(numeros);

        array.sort(function (a, b) { return a - b });
    }
    return array;
}

console.log(NumerosOrdenados());