localStorage.setItem("Producto1", JSON.stringify({ "nombre": "Cartel naranja", "precio": 500, "codigo": "1111", "cantidadTotal": 0, "html": "" }));
localStorage.setItem("Producto2", JSON.stringify({ "nombre": "Cartel azul", "precio": 1000, "codigo": "2222", "cantidadTotal": 0, "html": "" }));
localStorage.setItem("Producto3", JSON.stringify({ "nombre": "Cartel violeta", "precio": 2000, "codigo": "3333", "cantidadTotal": 0, "html": "" }));
localStorage.setItem("Producto4", JSON.stringify({ "nombre": "Cartel rojo", "precio": 1800, "codigo": "4444", "cantidadTotal": 0, "html": "" }));
localStorage.setItem("Producto5", JSON.stringify({ "nombre": "Cartel blanco", "precio": 1450, "codigo": "5555", "cantidadTotal": 0, "html": "" }));


let producto1 = JSON.parse(localStorage.getItem("Producto1"));
let producto2 = JSON.parse(localStorage.getItem("Producto2"));
let producto3 = JSON.parse(localStorage.getItem("Producto3"));
let producto4 = JSON.parse(localStorage.getItem("Producto4"));
let producto5 = JSON.parse(localStorage.getItem("Producto5"));

listaProducto = [producto1, producto2, producto3, producto4, producto5];

// let listaTrabajos = document.querySelector(".img-Trabajos");



// let listaCards = listaTrabajos.getElementsByTagName("li");

// for (i = 0; i < listaProducto.length; i++) {
//     listaProducto[i].html = listaCards[i].innerHTML;
// }


// listaProducto.sort(function(a, b) {
//     if (a.precio < b.precio) {
//         return 1;
//     } else if (a.precio > b.precio) {
//         return -1;
//     }
// });

// listaTrabajos.innerHTML = ""



// for (el of listaProducto) {
//     listaTrabajos.innerHTML += `<li>${el.html}</li>`;
// }


option = -1;

total = 0;


function sumaTot(lista, total) {
    for (const i of lista) {
        total += i.precio * i.cantidadTotal;
    }
    return total
}

let contenedor = document.querySelectorAll(".contenedor-agregar");
let btnAgregar = document.getElementsByClassName("boton-agregar");
let btnCancelar = document.getElementsByClassName("cancelar");
let btnSubmit = document.getElementsByClassName("enviar");
let cantidadAgregada = document.getElementsByClassName("input-agregar");
let crearProducto = document.querySelector(".cantidad-productos");
let crearPrecio = document.querySelector(".precios-carrito");
let crearTotal = document.querySelector(".precioTotal-carrito");
let btnBorrar = document.querySelector('.borrar-pedido');
cont = 0;

let g = document.getElementsByClassName('boton-agregar');
for (let i = 0, len = g.length; i < len; i++) {

    (function(index) {
        function abrirOpciones() {
            contenedor[index].id = "contenedor-abierto";
        }



        function cerrarOpciones() {
            contenedor[index].id = "contenedor-cerrado";
            cantidadAgregada[index].value = 0;
        }

        function agregarProductos() {
            cont = 0;
            listaProducto[index].cantidadTotal += parseInt(cantidadAgregada[index].value);
            cerrarOpciones()
            crearProducto.innerHTML = ``;
            crearPrecio.innerHTML = ``;
            crearTotal.innerHTML = ``;
            sumaTotal = sumaTot(listaProducto, total);
            for (const el of listaProducto) {
                crearProducto.innerHTML += `<div class="display-none" id="1"><p>${el.nombre} </p> <p> x${el.cantidadTotal}</p> <a href="#" class="boton-quitar">Quitar<a></div>`;
                productos = document.getElementsByClassName("display-none");
                suma = el.cantidadTotal * el.precio;
                crearPrecio.innerHTML += `<div class="none"><p>$ ${suma}</p></div>`;
                precios0 = document.getElementsByClassName("none");
                if (el.cantidadTotal != 0) {
                    productos[cont].id = "productos-carrito";
                    precios0[cont].id = "productos-carrito";
                }


                crearTotal.innerHTML = `<div class="separador-total"></div><p>$ ${sumaTotal}</p>`;
                btnQuitar = document.getElementsByClassName("boton-quitar");
                cont += 1;
                let k = document.getElementsByClassName('boton-quitar');
                for (let j = 0, len = k.length; j < len; j++) {
                    (function(index2) {
                        function abrirRange() {
                            crearProducto.innerHTML = `<input type="range" class="rangeSacar" value="0" min="0" max="${listaProducto[index2].cantidadTotal}" oninput="this.nextElementSibling.value = this.value">
                            <output>0</output><input type="submit" value="✔Aceptar" class="aceptar-sacar">`;
                            range = document.querySelector(".rangeSacar");
                            btnAceptarSacar = document.querySelector(".aceptar-sacar");
                            btnAceptarSacar.addEventListener("click", sacarProductos);
                        }


                        function sacarProductos() {
                            listaProducto[index2].cantidadTotal -= parseInt(range.value);
                            agregarProductos()
                        }

                        btnQuitar[index2].addEventListener("click", abrirRange)


                    })(j);

                }
            }

        }



        function borrarPedido() {

            crearProducto.innerHTML = `<p>Vacio</p>`;
            crearPrecio.innerHTML = `<p>Vacio</p>`
            crearTotal.innerHTML = `<div class="separador-total"></div><p>Vacio</p>`
            for (i of listaProducto) {
                i.cantidadTotal = 0;
            }
        }

        btnBorrar.addEventListener("click", borrarPedido);
        cantidadAgregada[index].value = 0;
        btnAgregar[index].addEventListener("click", abrirOpciones);
        btnCancelar[index].addEventListener("click", cerrarOpciones);
        btnSubmit[index].addEventListener("click", agregarProductos);
    })(i);
}





let carrito = document.querySelector(".carrito");
let listaCarrito = document.querySelector(".productosLlevados");
let btnPagar = document.querySelector(".boton-pagar");

carrito.id = "carrito-no-desplegado";

function abrirCarrito() {
    if (carrito.id == "carrito-no-desplegado") {
        listaCarrito.id = "carrito-abierto";
        carrito.id = "carrito-desplegado";


    } else if (carrito.id == "carrito-desplegado") {


        listaCarrito.id = "carrito-cerrado";
        carrito.id = "carrito-no-desplegado";
    }


}

function abrirPagar() {

}


btnPagar.addEventListener("click", abrirPagar);
carrito.addEventListener("click", abrirCarrito);


// while (option != 0) {
//     total = 0;
//     optionProducto = -1;
//     optionTot = -1;
//     optionPagar = -1;
//     optionCuota = -1;
//     optionQuitar = -1;
//     cantQuitar = 0;
//     optionFiltro = -1;
//     const cuota3 = 1.10;
//     const cuota6 = 1.20;
//     const cuota12 = 1.30;
//     const descuentoFt = 0.90;
//     let crearProducto = document.querySelector(".lista-productos");
//     crearProducto.innerHTML = `<p></p>`;
//     msj = " "
//     for (const element of listaProducto) {
//         if (element.cantidadTotal > 0) {
//             msj += element.nombre + "   x" + element.cantidadTotal + "\n";
//         }
//     }
//     crearProducto.innerText = `${msj}`;
//     option = parseInt(prompt("Ingrese un numero para navegar por el menu: \n 1)Agregar productos \n 2) Ver carrito \n 3) Sacar productos\n 4) Filtrar\n 0)SALIR"));



//     if (option == 1) {
//         msj = "Ingrese el numero del producto que desea agregar:";
//         num = 1;
//         for (const i of listaProducto) {
//             msj += "\n" + num + ") " + i.nombre;
//             num += 1;
//         }
//         while (optionProducto != 0) {
//             optionProducto = parseInt(prompt(msj + "\n0) VOLVER"));
//             if (optionProducto == 1) {
//                 cantProducto = parseInt(prompt("Ingresa la cantidad que desea agregar: "));
//                 producto1.cantidadTotal = cantProducto + producto1.cantidadTotal;
//             } else if (optionProducto == 2) {
//                 cantProducto = parseInt(prompt("Ingresa la cantidad que desea agregar: "));
//                 producto2.cantidadTotal = cantProducto + producto2.cantidadTotal;
//             } else if (optionProducto == 3) {
//                 cantProducto = parseInt(prompt("Ingresa la cantidad que desea agregar: "));
//                 producto3.cantidadTotal = cantProducto + producto3.cantidadTotal;
//             } else if (optionProducto == 0) {
//                 continue
//             }
//         }




//     } else if (option == 2) {
//         total = sumaTot(listaProducto, total)
//         while (optionTot != 0) {
//             optionTot = parseInt(prompt("Ingrese un numero para navegar por el menu: \n 1)Ver total \n 2) Pagar \n 0) VOLVER"));




//             if (optionTot == 1) {
//                 let msj = "El total es : ";
//                 for (const i of listaProducto) {
//                     if (i.cantidadTotal != 0)
//                         msj += "\n" + i.nombre + " x" + i.cantidadTotal;

//                 }
//                 alert(msj + "\n\nTotal: $" + total);




//             } else if (optionTot == 2) {
//                 while (optionPagar != 0) {
//                     optionPagar = parseInt(prompt("Elija el metodo de pago: \n 1)Credito (3, 6 y 12 cuotas con interes) \n 2) Debito (Sin interes) \n 3) Efectivo (Descuento) \n 0) VOLVER"));




//                     if (optionPagar == 1) {
//                         while (optionCuota != 0) {
//                             optionCuota = parseInt(prompt("Elija la cantidad de cuotas que prefiera: \n 1) 3 cuotas \n 2) 6 cuotas \n 3) 12 cuotas \n 0)VOLVER"))




//                             if (optionCuota == 1) {

//                                 alert("La suma total en 3 cuotas queda en: $" + (cuota3 * total));



//                             } else if (optionCuota == 2) {
//                                 alert("La suma total en 6 cuotas queda en: $" + (cuota6 * total));



//                             } else if (optionCuota == 3) {
//                                 alert("La suma total en 12 cuotas queda en: $" + (cuota12 * total));



//                             } else {
//                                 break;
//                             }
//                         }




//                     } else if (optionPagar == 2) {
//                         alert("La suma total es: " + "$" + total);




//                     } else if (optionPagar == 3) {
//                         alert("La suma total en cuotas queda en: $" + (descuentoFt * total));
//                     }
//                 }
//             }
//         }



//     } else if (option == 3) {
//         while (optionQuitar != 0) {
//             optionQuitar = parseInt(prompt("Ingrese el numero del producto que desea quitar: \n 1) Producto 1 \n 2) Producto 2 \n 3) Producto 3 \n 0) VOLVER"));



//             if (optionQuitar == 1) {
//                 cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
//                 while (cantQuitar > producto1.cantidadTotal) {
//                     alert("No es una opcion valida");
//                     cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
//                 }
//                 producto1.cantidadTotal = producto1.cantidadTotal - cantQuitar;



//             } else if (optionQuitar == 2) {
//                 cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
//                 while (cantQuitar > producto2.cantidadTotal) {
//                     alert("No es una opcion valida");
//                     cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
//                 }
//                 producto2.cantidadTotal = producto2.cantidadTotal - cantQuitar;



//             } else if (optionQuitar == 3) {
//                 cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
//                 while (cantQuitar > producto3.cantidadTotal) {
//                     alert("No es una opcion valida");
//                     cantQuitar = parseInt(prompt("Ingrese la cantidad que desea sacar: "));
//                 }
//                 producto3.cantidadTotal = producto3.cantidadTotal - cantQuitar;
//             }
//         }
//     } else if (option == 4) {
//         while (optionFiltro != 0) {
//             optionFiltro = parseInt(prompt("Ingrese un numero para navegar por el menu: \n 1) Filtrar por precio \n 2) Buscar por nombre \n 0) VOLVER"));
//             if (optionFiltro == 1) {
//                 precioMin = parseFloat(prompt("Ingrese el valor minimo del precio: "));
//                 precioMax = parseFloat(prompt("Ingrese el valor maximo del precio: "));
//                 largo = 0;
//                 const filtrado = listaProducto.filter((producto) => ((producto.precio <= precioMax) && (producto.precio >= precioMin)));
//                 for (const i of filtrado) {
//                     largo += 1;
//                 }
//                 if (largo != 0) {
//                     msj = "Los productos encontrados en ese rango de precio son: ";
//                     for (const i of filtrado) {
//                         msj += "\n" + i.nombre + "   $" + i.precio;
//                     }
//                     alert(msj);
//                 } else {
//                     alert("No se encontro ningun producto en ese rango de precio");
//                 }
//             } else if (optionFiltro == 2) {
//                 busqueda = prompt("Ingrese el nombre del producto que quiere buscar: ").toLowerCase();
//                 const encontrado = listaProducto.find((producto) => (producto.nombre.toLowerCase()) === busqueda);
//                 if (encontrado != undefined) {
//                     alert("El producto econtrado es: \n" + encontrado.nombre + "   $" + encontrado.precio);
//                 } else {
//                     alert("El producto no se pudo encontrar")
//                 }
//             }
//         }
//     }
// }