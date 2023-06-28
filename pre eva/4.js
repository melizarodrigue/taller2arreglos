/*4.Valor (2 puntos) Pedro trabaja en una empresa desarrolladora que está haciendo un software para el cliente orbi (una empresa multinacional). Pedro requiere una función que reciba como argumento el arreglo de caracteres ["b", "p", "s", "z", "o", "b", "a", "w", "r", “i”] y muestre si es posible formar la palabra orbi con los elementos del arreglo. .En caso de ser posible, quite los elementos del arreglo que no sirven para formar la palabra orbi y luego ordene el arreglo para que quede como el siguiente: [“o”, “r”, “b”, “i”]. 
Cree la función que  requiere Pedro. Haga el análisis y luego codifique.
 */

let arreglo = ['b', 'p', 's', 'z', 'o', 'b', 'a', 'w', 'r','i'];
let validacion = true;

function orbi(arreglo) {
  let requiredLetters = ["o", "r", "b", "i"];

  for (let index = 0; index < arreglo.length; index++) {
    if (requiredLetters.every(letter => arreglo.includes(letter))) {
      validacion = true;
      break;
    }
  }

  if (validacion) {
    console.log("Sí es posible crear la palabra orbi");
  } else {
    console.log("No es posible crear la palabra orbi");
  }
}

orbi(arreglo);
