/*4.	Cree una función que reciba un arreglo de números naturales 
y muestre todos los números primos en él. */

let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarNumerosPrimos(num) {
  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }

    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return true;
  }

  let Primos = [];

  for (let i = 0; i < num.length; i++) {
    let numero = num[i];
    if (esPrimo(numero)) {
      Primos.push(numero);
    }
  }

  return Primos;
}

let Primos = mostrarNumerosPrimos(num);
console.log(Primos);