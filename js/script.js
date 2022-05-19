function Producto(nombre, precio, codigo, cantidadTotal) {
    this.nombre = nombre;
    this.precio = precio;
    this.codigo = codigo;
    this.cantidadTotal = cantidadTotal;
}

let producto1 = new Producto("Cartel neon 1", 500, "1111", 0);
let producto2 = new Producto("Cartel neon 2", 1000, "2222", 0);
let producto3 = new Producto("Cartel neon 3", 2000, "3333", 0);

listaProducto = [producto1, producto2, producto3];

option = -1;

total = 0;

const sumaTot = (a, ca, b, cb, c, cc) => (a * ca) + (cb * b) + (c * cc);

while (option != 0) {
    total = 0;
    optionProducto = -1;
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
        while (optionProducto != 0) {
            optionProducto = parseInt(prompt("Ingrese el numero del producto que desea agregar:" + "\n1) " + producto1.nombre + "\n2) " + producto2.nombre + "\n3) " + producto3.nombre + "\n0) VOLVER"));
            if (optionProducto == 1) {
                cantProducto = parseInt(prompt("Ingresa la cantidad que desea agregar: "));
                producto1.cantidadTotal = cantProducto + producto1.cantidadTotal;
            } else if (optionProducto == 2) {
                cantProducto = parseInt(prompt("Ingresa la cantidad que desea agregar: "));
                producto2.cantidadTotal = cantProducto + producto2.cantidadTotal;
            } else if (optionProducto == 3) {
                cantProducto = parseInt(prompt("Ingresa la cantidad que desea agregar: "));
                producto3.cantidadTotal = cantProducto + producto3.cantidadTotal;
            } else if (optionProducto == 0) {
                continue
            }
        }




    } else if (option == 2) {
        while (optionTot != 0) {
            optionTot = parseInt(prompt("Ingrese un numero para navegar por el menu: \n 1)Ver total \n 2) Pagar \n 0) VOLVER"));




            if (optionTot == 1) {
                alert("El total es: \n" + listaProducto[0].nombre + " x" + listaProducto[0].cantidadTotal + "\n" + listaProducto[1].nombre + " x" + listaProducto[1].cantidadTotal + "\n" + listaProducto[2].nombre + " x" + listaProducto[2].cantidadTotal + "\nSuma total: $" + sumaTot(producto1.cantidadTotal, producto1.precio, producto2.cantidadTotal, producto2.precio, producto3.cantidadTotal, producto3.precio));




            } else if (optionTot == 2) {
                while (optionPagar != 0) {
                    optionPagar = parseInt(prompt("Elija el metodo de pago: \n 1)Credito (3, 6 y 12 cuotas con interes) \n 2) Debito (Sin interes) \n 3) Efectivo (Descuento) \n 0) VOLVER"));




                    if (optionPagar == 1) {
                        while (optionCuota != 0) {
                            optionCuota = parseInt(prompt("Elija la cantidad de cuotas que prefiera: \n 1) 3 cuotas \n 2) 6 cuotas \n 3) 12 cuotas \n 0)VOLVER"))




                            if (optionCuota == 1) {
                                alert("La suma total en 3 cuotas queda en: $" + (cuota3 * (sumaTot(producto1.cantidadTotal, producto1.precio, producto2.cantidadTotal, producto2.precio, producto3.cantidadTotal, producto3.precio))));



                            } else if (optionCuota == 2) {
                                alert("La suma total en 6 cuotas queda en: $" + (cuota6 * (sumaTot(producto1.cantidadTotal, producto1.precio, producto2.cantidadTotal, producto2.precio, producto3.cantidadTotal, producto3.precio))));



                            } else if (optionCuota == 3) {
                                alert("La suma total en 12 cuotas queda en: $" + (cuota12 * (sumaTot(producto1.cantidadTotal, producto1.precio, producto2.cantidadTotal, producto2.precio, producto3.cantidadTotal, producto3.precio))));



                            } else {
                                break;
                            }
                        }




                    } else if (optionPagar == 2) {
                        alert("La suma total es: " + "$" + sumaTot(producto1.cantidadTotal, producto1.precio, producto2.cantidadTotal, producto2.precio, producto3.cantidadTotal, producto3.precio));




                    } else if (optionPagar == 3) {
                        alert("La suma total en cuotas queda en: $" + (descuentoFt * (sumaTot(producto1.cantidadTotal, producto1.precio, producto2.cantidadTotal, producto2.precio, producto3.cantidadTotal, producto3.precio))));
                    }
                }
            }
        }



    } else if (option == 3) {
        while (optionQuitar != 0) {
            optionQuitar = parseInt(prompt("Ingrese el numero del producto que desea quitar: \n 1) Producto 1 \n 2) Producto 2 \n 3) Producto 3 \n 0) VOLVER"));



            if (optionQuitar == 1) {
                cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                while (cantQuitar > producto1.cantidadTotal) {
                    alert("No es una opcion valida");
                    cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                }
                producto1.cantidadTotal = producto1.cantidadTotal - cantQuitar;



            } else if (optionQuitar == 2) {
                cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                while (cantQuitar > producto2.cantidadTotal) {
                    alert("No es una opcion valida");
                    cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                }
                producto2.cantidadTotal = producto2.cantidadTotal - cantQuitar;



            } else if (optionQuitar == 3) {
                cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                while (cantQuitar > producto3.cantidadTotal) {
                    alert("No es una opcion valida");
                    cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
                }
                producto3.cantidadTotal = producto3.cantidadTotal - cantQuitar;
            }
        }
    }
}