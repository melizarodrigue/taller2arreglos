/*14.	Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
Se le debe pedir al usuario que introduzca el arreglo.
 */

let letras = [];

function Alfabeticamente() {
    let total = parseInt(prompt("Ingrese el numero de letras que va a ingresar"));

  for (let index = 0; index < total; index++) {
    const letra= prompt("Ingrese la letra");
    letras.push(letra)
    letras.sort()
  }
  return letras;
}

Alfabeticamente(letras)