function Producto(nombre, precio, codigo, cantidadTotal) {
    this.nombre = nombre;
    this.precio = precio;
    this.codigo = codigo;
    this.cantidadTotal = cantidadTotal;
}

let producto1 = new Producto("Cartel naranja", 500, "1111", 0);
let producto2 = new Producto("Cartel azul", 1000, "2222", 0);
let producto3 = new Producto("Cartel violeta", 2000, "3333", 0);

listaProducto = [producto1, producto2, producto3];

option = -1;

total = 0;


function sumaTot(lista, total) {
    for (const i of lista) {
        total += i.precio * i.cantidadTotal;
    }
    return total
}

while (option != 0) {
    total = 0;
    optionProducto = -1;
    optionTot = -1;
    optionPagar = -1;
    optionCuota = -1;
    optionQuitar = -1;
    cantQuitar = 0;
    optionFiltro = -1;
    const cuota3 = 1.10;
    const cuota6 = 1.20;
    const cuota12 = 1.30;
    const descuentoFt = 0.90;
    option = parseInt(prompt("Ingrese un numero para navegar por el menu: \n 1)Agregar productos \n 2) Ver carrito \n 3) Sacar productos\n 4) Filtrar\n 0)SALIR"));



    if (option == 1) {
        msj = "Ingrese el numero del producto que desea agregar:";
        num = 1;
        for (const i of listaProducto) {
            msj += "\n" + num + ") " + i.nombre;
            num += 1;
        }
        while (optionProducto != 0) {
            optionProducto = parseInt(prompt(msj + "\n0) VOLVER"));
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
        total = sumaTot(listaProducto, total)
        while (optionTot != 0) {
            optionTot = parseInt(prompt("Ingrese un numero para navegar por el menu: \n 1)Ver total \n 2) Pagar \n 0) VOLVER"));




            if (optionTot == 1) {
                let msj = "El total es : ";
                for (const i of listaProducto) {
                    if (i.cantidadTotal != 0)
                        msj += "\n" + i.nombre + " x" + i.cantidadTotal;

                }
                alert(msj + "\n\nTotal: $" + total);




            } else if (optionTot == 2) {
                while (optionPagar != 0) {
                    optionPagar = parseInt(prompt("Elija el metodo de pago: \n 1)Credito (3, 6 y 12 cuotas con interes) \n 2) Debito (Sin interes) \n 3) Efectivo (Descuento) \n 0) VOLVER"));




                    if (optionPagar == 1) {
                        while (optionCuota != 0) {
                            optionCuota = parseInt(prompt("Elija la cantidad de cuotas que prefiera: \n 1) 3 cuotas \n 2) 6 cuotas \n 3) 12 cuotas \n 0)VOLVER"))




                            if (optionCuota == 1) {

                                alert("La suma total en 3 cuotas queda en: $" + (cuota3 * total));



                            } else if (optionCuota == 2) {
                                alert("La suma total en 6 cuotas queda en: $" + (cuota6 * total));



                            } else if (optionCuota == 3) {
                                alert("La suma total en 12 cuotas queda en: $" + (cuota12 * total));



                            } else {
                                break;
                            }
                        }




                    } else if (optionPagar == 2) {
                        alert("La suma total es: " + "$" + total);




                    } else if (optionPagar == 3) {
                        alert("La suma total en cuotas queda en: $" + (descuentoFt * total));
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
    } else if (option == 4) {
        while (optionFiltro != 0) {
            optionFiltro = parseInt(prompt("Ingrese un numero para navegar por el menu: \n 1) Filtrar por precio \n 2) Buscar por nombre \n 0) VOLVER"));
            if (optionFiltro == 1) {
                precioMin = parseFloat(prompt("Ingrese el valor minimo del precio: "));
                precioMax = parseFloat(prompt("Ingrese el valor maximo del precio: "));
                largo = 0;
                const filtrado = listaProducto.filter((producto) => ((producto.precio <= precioMax) && (producto.precio >= precioMin)));
                for (const i of filtrado) {
                    largo += 1;
                }
                if (largo != 0) {
                    msj = "Los productos encontrados en ese rango de precio son: ";
                    for (const i of filtrado) {
                        msj += "\n" + i.nombre + "   $" + i.precio;
                    }
                    alert(msj);
                } else {
                    alert("No se encontro ningun producto en ese rango de precio");
                }
            } else if (optionFiltro == 2) {
                busqueda = prompt("Ingrese el nombre del producto que quiere buscar: ").toLowerCase();
                const encontrado = listaProducto.find((producto) => (producto.nombre.toLowerCase()) === busqueda);
                if (encontrado != undefined) {
                    alert("El producto econtrado es: \n" + encontrado.nombre + "   $" + encontrado.precio);
                } else {
                    alert("El producto no se pudo encontrar")
                }
            }
        }
    }
}