//5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.

let b = ["abc", 4, 88, 99];
let independiente= b.slice()
b.push("!");
independiente.push(3)
console.log(independiente);
console.log(c);