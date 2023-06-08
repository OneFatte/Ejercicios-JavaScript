let helado = prompt("Tenemos la siguiente oferta de topings: oreo 10$, kitkat 15$, brownie 20$");

helado.toLowerCase();

if (helado === "oreo") {
    console.log("El costo del helado es de: 60$");
} else if (helado === "kitkat") {
    console.log("El costo del helado es de: 65$");
} else if (helado === "brownie") {
    console.log("El costo del helado es de: 70$");
} else {
    console.log("no tenemos este topping, lo sentimos, el costo del helado sin topping es de 50$");
}