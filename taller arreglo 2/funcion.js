/* 2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo.*/


let arreglo = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
let a = "";
let c = "";
let t = "";
let g = "";

function ADN(arreglo) {
    for (let index = 0; index < arreglo.length; index++) {
        for (let i = 0; i < arreglo[index].length; i++) {
            if (arreglo[index][i] == "A") {
                a += "A";
            }
            if (arreglo[index][i] == "C") {
                c += "C";
            }
            if (arreglo[index][i] == "T") {
                t += "T";
            }
            if (arreglo[index][i] == "G") {
                g += "G";
            }
        }

    }
    let mensaje = `Las cadenas de una sola base que se pueden formar con el arreglo dado son: \n${a} \n${t} \n${c} \n${g}`
    return mensaje
}

let base = ADN(arreglo)
console.log(base);