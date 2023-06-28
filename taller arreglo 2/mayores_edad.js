/*5.	Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con losnombres de 
los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de edad. */

function Usuarios() {
  let mayoredad = [];
  let total = parseInt(prompt("Ingrese la cantidad de usuarios:"));

  for (let index = 0; index < total; index++) {
    const nombre = prompt("Ingrese el nombre del usuario:");
    const edad = parseInt(prompt("Ingrese la edad del usuario:"));

    if (edad >= 18) {
      mayoredad.push(nombre);
    }
  }

  console.log("Los usuarios mayores de edad son:", mayoredad);
  console.log("Cantidad de usuarios mayores de edad:", mayoredad.length);

  return mayoredad;
}


let mayoredad = Usuarios();