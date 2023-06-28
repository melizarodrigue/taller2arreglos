//4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.

let  a = [2, 6, 9, 0, 5];
a.push(7)
let dependiente = a;

console.log(a);
console.log(dependiente);