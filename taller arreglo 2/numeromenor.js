/*3.	Cree una función que reciba un arreglo de números y retorne el número menor entre todos 
los elementos del arreglo. */

let arreglo = [2, 3, 4, 2, 1]


function numero(arreglo) {
  let numeroMenor = arreglo[0]

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < numeroMenor) {
      numeroMenor = arreglo[i];
    }
  }
  return numeroMenor;
}

let resultado = numero(arreglo);
console.log(resultado);

