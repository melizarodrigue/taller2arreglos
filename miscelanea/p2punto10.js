/*10.	Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para inspeccionar 
los elementos del arreglo y mostrar si con tales elementos sería posible formar la palabra adso. */

let arreglo = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let palabra = ["a", "d", "s", "o"];
let validacion = true;

for (let index = 0; index < arreglo.length; index++) {
    for (let index = 0; index < palabra.length; index++) {
        if (!arreglo.includes(palabra[index])) {
            validacion = false;
            break;
        }
    }
}


if (validacion) {
    console.log("si se puede");
} else {
    console.log("no se puedde");
}
