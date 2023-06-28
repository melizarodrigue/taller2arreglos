/*6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
    “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
    queden en el arreglo que les corresponde. Use ciclos.*/

let valle = ["Cali", "Tulua", "Cartago", "Salento"]
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"]

let BienValle = [];
let BienQuindio = [];
let elemento = 0;

for (let i = 0; i < valle.length; i++) {
    elemento = valle[i];

    if (elemento === "Palmira" || elemento === "Tulua" || elemento === "Cartago" || elemento === "Cali") {
        BienValle.push(elemento);
    }

    if (elemento === "Cordoba" || elemento === "Armenia" || elemento === "Circasia" || elemento === "Salento") {
        BienQuindio.push(elemento);
    }
}

console.log("valle:", BienValle);
console.log("Quindio:", BienQuindio);

