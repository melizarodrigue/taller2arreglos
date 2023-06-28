/*2. Valor (1 punto) Shilrley trabaja como
programadora en la empresa Data East
programando videojuegos. Ella requiere una
función que reciba como argumentos los arreglos
[“s”, “w”, “@”, “3”, “a”, “p”] y [“#”, “p”, “a”, “z”, “@]
y retorne un arreglo con los elementos que se
repiten en ambos, emparejados como una cadena,
en este caso: [“@@”, “aa”, “pp”].
Cree la función que requiere Shirley. */

let actualizar = [];
let elemento = 0;
let elemento2 = 0;
let suma = 0;

function emparejados(arreglo, arreglo1) {
    for (let index = 0; index < arreglo.length; index++) {
        elemento = arreglo[index]
        for (let i = 0; i < arreglo1.length; i++) {
            elemento2 = arreglo1[i]

            if (elemento === elemento2) {
                suma = elemento + elemento2;
                actualizar.push(suma);
            }
        }
    }
    return actualizar;
}

resultado = emparejados(['s', 'w', '@', '3', 'a', 'p'], ['#', 'p', 'a', 'z', '@']);
console.log(actualizar);

