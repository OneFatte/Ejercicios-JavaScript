let num1 = prompt("Escribe numero 1");
let num2 = prompt("Escribe numero 2");
let num3 = prompt("Escribe numero 3");


if (num1 > num2 && num1 > num3) {
    console.log(num1 + " es mayor");
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " es mayor ");
} else if (num3 > num1 && num3 > num2) {
    console.log(num3 + " es mayor ");
} else {
    console.log("No te entendi");
}