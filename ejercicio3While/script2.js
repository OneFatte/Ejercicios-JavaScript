let i = 1;
let num1 = prompt("Ingrese numero 1 - 50:");
let num2 = prompt("Ingrese otro numero 1-50:");

while (i <= 50) {
    // if (num1 == "" || num2 == "") break;

    if (num1 == i || num2 == i) {
        console.log(i + " Loteria");
    } else {
        console.log(i);
    }
    i++;
}