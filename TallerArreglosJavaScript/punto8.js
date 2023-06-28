/*8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos) */

let arreglo=[2, false, "&", true];
let acumuladora=0;

function arreglos (arreglo) {
    for (let index = 0; index < arreglo.length; index++) {
        acumuladora = acumuladora + index;
        
    }
    return acumuladora;
}  

console.log(arreglo);



