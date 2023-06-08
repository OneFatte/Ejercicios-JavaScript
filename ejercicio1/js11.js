
let vehiculo = prompt("Que vehiculo necesita: carro, moto o bus");
vehiculo.toLowerCase();

let cargoVehiculo;

if (vehiculo == "carro") {
    cargoVehiculo = 0.2;
} else if (vehiculo == "moto") {
    cargoVehiculo = 0.2;
} else if (vehiculo == "bus") {
    cargoVehiculo = 0.2;
} else {
    alert("Escribe carro, moto o bus");
    cargoVehiculo = 0;
}


let distancia = prompt("Cuantos kimolemtros tiene la ruta?");
let cantidad = prompt("Cuantos litros necesita:");

let total;
if (cantidad >= 0 && cantidad <= 100) {

    total = (cargoVehiculo * distancia) + 5;
    console.log("El total es: " + total);

} else if (cantidad > 100) {
    total = (cargoVehiculo * distancia) + 10;
    console.log("El total es: " + total);
} else {
    console.log("error");
}