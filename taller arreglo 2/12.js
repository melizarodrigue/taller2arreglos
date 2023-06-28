/*12.	Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por 
    las letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número 
    de Timina (T). Se le debe pedir al usuario que introduzca los arreglos. */

function encontrarCadenaConMasT(arrCadenas) {
    let cadenaMasT = '';
    let maxTCount = 0;

    for (let i = 0; i < arrCadenas.length; i++) {
        const cadena = arrCadenas[i];
        let tCount = 0;

        for (let j = 0; j < cadena.length; j++) {
            if (cadena[j] === 'T') {
                tCount++;
            }
        }

        if (tCount > maxTCount) {
            maxTCount = tCount;
            cadenaMasT = cadena;
        }
    }

    return cadenaMasT;
}

// Obtener entrada del usuario
const numCadenas = parseInt(prompt('Ingrese el número de cadenas de ADN:'));
const arrCadenas = [];

for (let i = 0; i < numCadenas; i++) {
    const cadena = prompt(`Ingrese la cadena de ADN #${i + 1}:`);
    arrCadenas.push(cadena);
}

// Encontrar cadena con mayor número de T
const cadenaMayorT = encontrarCadenaConMasT(arrCadenas);

console.log('La cadena con mayor número de Timina (T) es:', cadenaMayorT);