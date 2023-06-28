/*3. Valor (1 punto) Mariana, que trabaja en la
empresa BioGenetics S.A, requiere una función que
pida al usuario un arreglo con cuatro cadenas de
ADN como elementos, cada cadena debe ser de
logitud 7. Un ejemplo de un arreglo ingresado por
el usuario sería: [“AATGAAC”, “GTTTTTC”,
“GGTAAAT”, “CCCCATG”]) .Luego de obtener el
arreglo del usuario, muestre cuál es la base que más
se repite en tales cadenas que forman el arreglo.
Recuerde que una cadena de ADN puede contener
las cuatro bases químicas, solo tres bases, solo dos
bases o solo una base, por ejemplo:
“AGTTCCAT” cadena formada por 4 bases
“ATTAGATC” cadena formada por 3 bases
“AATTTATA” cadena formada por 2 bases
“CCCCCCC” cadena formada por 1 base
Cree la función que necesita Mariana.
 */

function BaseADN() {
    let arreglo = [];
    for (let index = 0; index < 4; index++) {
        let cadena = "";

        while (cadena.length !== 7) {
            cadena = prompt("Ingresa la cadena de ADN #" + (index + 1));
            if (cadena.length !== 7) {
                console.log("La cadena de ADN debe tener una longitud de 7 caracteres.");
            }
        }
        arreglo.push(cadena);
    }
    
    let validacion = true;
    for (let index = 0; index < arreglo.length; index++) {
        for (let j = 0; j < arreglo[index]; j++) {

            if (arreglo[index][j] !== "A" && arreglo[index][j] !== "C" && arreglo[index][j] !== "T" && arreglo[index][j] !== "G") {
                validacion = false;
            }

        }
    }

    if (!validacion) {
        console.log("una o mas cadenas contienen caracteres invalidos.");
        return arreglo;
    }

    let A = "";
    let C = "";
    let T = "";
    let G = "";

    for (let index = 0; index < arreglo.length; index++) {
        for (let i = 0; i < arreglo[index].length; i++) {
            if (arreglo[index][i] == "A") {
                A += "A";
            }
            if (arreglo[index][i] == "C") {
                C += "C";
            }
            if (arreglo[index][i] == "T") {
                T += "T";
            }
            if (arreglo[index][i] == "G") {
                G += "G";
            }

        }

    }

    if (A > C && A > T && A > G) {
        console.log("la base que mas se repite es A");
    }
    if (C > A && C > T && C > G) {
        console.log("la base que mas se repite es C");
    }
    if (T > A && T > C && T > G) {
        console.log("la base que mas se repite es T");
    }
    if (G > A && G > T && G > C) {
        console.log("la base que mas se repite es G");
    }

    return arreglo;


}

let resultado = BaseADN();
console.log("El arreglo de ADN ingresado por el usuario es:", resultado);
