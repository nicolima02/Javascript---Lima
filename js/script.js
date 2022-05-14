let precioProducto1 = 500;
let precioProducto2 = 1000;
let precioProducto3 = 2000;


option = -1;

total = 0;

cantPr1Tot = 0;
cantPr2Tot = 0;
cantPr3Tot = 0;

const sumaTot = (a, ca, b, cb, c, cc) => (a * ca) + (cb * b) + (c * cc);

while (option != 0) {
    total = 0;
    optionPr = -1;
    optionTot = -1;
    optionPagar = -1;
    optionCuota = -1;
    optionQuitar = -1;
    cantQuitar = 0;
    const cuota3 = 1.10;
    const cuota6 = 1.20;
    const cuota12 = 1.30;
    const descuentoFt = 0.90;
    option = parseInt(prompt("Ingrese un numero para navegar por el menu: \n 1)Agregar productos \n 2) Ver carrito \n 3) Sacar productos\n 0)SALIR"));
    if (option == 1) {
        while (optionPr != 0) {
            optionPr = parseInt(prompt("Ingrese el numero del producto que desea agregar: \n 1) Producto 1 \n 2) Producto 2 \n 3) Producto 3 \n 0) VOLVER"));
            if (optionPr == 1) {
                cantPr1 = parseInt(prompt("Ingresa la cantidad que desea agregar: "));
                cantPr1Tot = cantPr1 + cantPr1Tot;
            } else if (optionPr == 2) {
                cantPr2 = parseInt(prompt("Ingresa la cantidad que desea agregar: "));
                cantPr2Tot = cantPr2 + cantPr2Tot;
            } else if (optionPr == 3) {
                cantPr3 = parseInt(prompt("Ingresa la cantidad que desea agregar: "));
                cantPr3Tot = cantPr3 + cantPr3Tot;
            } else if (optionPr == 0) {
                continue
            }
        }
    } else if (option == 2) {
        while (optionTot != 0) {
            optionTot = parseInt(prompt("Ingrese un numero para navegar por el menu: \n 1)Ver total \n 2) Pagar \n 0) VOLVER"));
            if (optionTot == 1) {
                alert("El total es: \nProducto 1: x" + cantPr1Tot + "\nProducto 2: x" + cantPr2Tot + "\nProducto 3: x" + cantPr3Tot + "\nSuma total: $" + sumaTot(cantPr1Tot, precioProducto1, cantPr2Tot, precioProducto2, cantPr3Tot, precioProducto3));
            } else if (optionTot == 2) {
                while (optionPagar != 0) {
                    optionPagar = parseInt(prompt("Elija el metodo de pago: \n 1)Credito (3, 6 y 12 cuotas con interes) \n 2) Debito (Sin interes) \n 3) Efectivo (Descuento) \n 0) VOLVER"));
                    if (optionPagar == 1) {
                        while (optionCuota != 0) {
                            optionCuota = parseInt(prompt("Elija la cantidad de cuotas que prefiera: \n 1) 3 cuotas \n 2) 6 cuotas \n 3) 12 cuotas \n 0)VOLVER"))
                            if (optionCuota == 1) {
                                alert("La suma total en 3 cuotas queda en: $" + (cuota3 * (sumaTot(cantPr1Tot, precioProducto1, cantPr2Tot, precioProducto2, cantPr3Tot, precioProducto3))));
                            } else if (optionCuota == 2) {
                                alert("La suma total en 6 cuotas queda en: $" + (cuota6 * (sumaTot(cantPr1Tot, precioProducto1, cantPr2Tot, precioProducto2, cantPr3Tot, precioProducto3))));
                            } else if (optionCuota == 3) {
                                alert("La suma total en 12 cuotas queda en: $" + (cuota12 * (sumaTot(cantPr1Tot, precioProducto1, cantPr2Tot, precioProducto2, cantPr3Tot, precioProducto3))));
                            } else {
                                break;
                            }
                        }
                    } else if (optionPagar == 2) {
                        alert("La suma total es: " + "$" + sumaTot(cantPr1Tot, precioProducto1, cantPr2Tot, precioProducto2, cantPr3Tot, precioProducto3));
                    } else if (optionPagar == 3) {
                        alert("La suma total en cuotas queda en: $" + (descuentoFt * (sumaTot(cantPr1Tot, precioProducto1, cantPr2Tot, precioProducto2, cantPr3Tot, precioProducto3))));
                    }
                }
            }
        }
    } else if (option == 3) {
        while (optionQuitar != 0) { /*-----------------------------------ARREGLAR------------------------------- */
            optionQuitar = parseInt(prompt("Ingrese el numero del producto que desea quitar: \n 1) Producto 1 \n 2) Producto 2 \n 3) Producto 3 \n 0) VOLVER"));
            if (optionQuitar == 1) {
                cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                while (cantQuitar > cantPr1Tot) {
                    alert("No es una opcion valida");
                    cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                }
                cantPr1Tot = cantPr1Tot - cantQuitar;
            } else if (optionQuitar == 2) {
                cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                while (cantQuitar > cantPr2Tot) {
                    alert("No es una opcion valida");
                    cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                }
                cantPr2Tot = cantPr2Tot - cantQuitar;
            } else if (optionQuitar == 3) {
                cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                while (cantQuitar > cantPr3Tot) {
                    alert("No es una opcion valida");
                    cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                }
                cantPr3Tot = cantPr3Tot - cantQuitar;
            }
        }
    }
}