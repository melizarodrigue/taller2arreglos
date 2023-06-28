/*b)Dado el arreglo let datos = [20, 33, 67, 4, 60]
complete donde aparecen las rayas ( ____ ) para
mostrar el promedio de los elementos del arreglo:*/ 


let datos = [20, 33, 67, 4, 60]
let contador = 0
let suma = 0
while (contador < datos.length) {
 suma = suma + datos[contador];
 contador++
}
console.log(suma / contador)