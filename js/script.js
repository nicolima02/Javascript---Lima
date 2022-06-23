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

option = -1;

total = 0;


function sumaTot(lista, total) {
    for (const i of lista) {
        total += i.precio * i.cantidadTotal;
    }
    return total
}


let listaTrabajos = document.querySelector(".img-Trabajos");
let btnMenorMayor = document.getElementById("menorMayor");
let btnMayorMenor = document.getElementById("mayorMenor");
let listaCards = listaTrabajos.getElementsByTagName("li");


function menorMayor() {
    for (i = 0; i < listaProducto.length; i++) {
        listaProducto[i].html = listaCards[i].innerHTML;
    }


    listaProducto.sort(function(a, b) {
        if (a.precio < b.precio) {
            return -1;
        } else if (a.precio > b.precio) {
            return 1;
        }
    });

    listaTrabajos.innerHTML = ""



    for (el of listaProducto) {
        listaTrabajos.innerHTML += `<li>${el.html}</li>`;
    }

    main()
}

function mayorMenor() {
    for (i = 0; i < listaProducto.length; i++) {
        listaProducto[i].html = listaCards[i].innerHTML;
    }


    listaProducto.sort(function(a, b) {
        if (a.precio < b.precio) {
            return 1;
        } else if (a.precio > b.precio) {
            return -1;
        }
    });

    listaTrabajos.innerHTML = ""



    for (el of listaProducto) {
        listaTrabajos.innerHTML += `<li>${el.html}</li>`;
    }
    main()
}

btnMenorMayor.addEventListener("click", menorMayor);
btnMayorMenor.addEventListener("click", mayorMenor);



let crearProducto = document.querySelector(".cantidad-productos");
let crearPrecio = document.querySelector(".precios-carrito");
let crearTotal = document.querySelector(".precioTotal-carrito");

let g = document.getElementsByClassName('boton-agregar');

function main() {
    let contenedor = document.querySelectorAll(".contenedor-agregar");
    let btnAgregar = document.getElementsByClassName("boton-agregar");
    let btnCancelar = document.getElementsByClassName("cancelar");
    let btnSubmit = document.getElementsByClassName("enviar");
    let cantidadAgregada = document.getElementsByClassName("input-agregar");


    let btnBorrar = document.querySelector('.borrar-pedido');
    cont = 0;
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




            btnBorrar.addEventListener("click", borrarPedido);
            cantidadAgregada[index].value = 0;
            btnAgregar[index].addEventListener("click", abrirOpciones);
            btnCancelar[index].addEventListener("click", cerrarOpciones);
            btnSubmit[index].addEventListener("click", agregarProductos);
        })(i);
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
main();


let carrito = document.querySelector(".carrito");
let listaCarrito = document.querySelector(".productosLlevados");
let btnPagar = document.querySelector(".boton-pagar");


let contTarjeta = document.querySelector(".cont-tarjeta")
let contPagar = document.querySelector(".contenedor-pagar")
carrito.id = "carrito-no-desplegado";

function abrirCarrito() {
    if (carrito.id == "carrito-no-desplegado") {
        listaCarrito.id = "carrito-abierto";
        carrito.id = "carrito-desplegado";


    } else if (carrito.id == "carrito-desplegado") {

        contPagar.id = "contenedor-pagar-cerrado"
        listaCarrito.id = "carrito-cerrado";
        carrito.id = "carrito-no-desplegado";
        btnPagar.value = "PAGAR"
    }


}

sumaTotal = sumaTot(listaProducto, total);


function abrirPagar() {
    if (contPagar.id == "contenedor-pagar-cerrado" && sumaTotal > 0) {
        contPagar.id = "contenedor-pagar-abierto";
        btnPagar.value = "Cerrar"
    } else if (sumaTotal == 0) {
        Swal.fire("No hay ningun elemento en el carrito");
    } else {
        contPagar.id = "contenedor-pagar-cerrado";
        btnPagar.value = "PAGAR"
    }
}


function abrirTarjeta() {
    contTarjeta.id = "cont-tarjeta-abierto";
    contPagar.innerHTML += `<div class="boton-pagar2"><p> PAGAR </p></div>`;
}

btnPagar.addEventListener("click", abrirPagar);
carrito.addEventListener("click", abrirCarrito);
btnPagar2 = document.querySelector(".boton-pagar2");
nombre = document.querySelector(".name");
numero = document.querySelector(".card-number");
codigoSeg = document.querySelector(".cvc");


let listaPedido = [];


function subida() {
    usuario = nombre.value;
    listaPedido = [];
    for (el of listaProducto) {
        if (el.cantidadTotal != 0) {
            listaPedido.push(el);
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                listaPedido,
                sumaTotal,
                usuario,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    Swal.fire("Pagado!")
    nombre.value = "";
    numero.value = "";
    codigoSeg.value = "";
    borrarPedido()
}

setInterval(() => {
    if ((nombre.value.toString() == "") || ((numero.value.toString() == "")) || ((codigoSeg.value.toString() == ""))) {
        btnPagar2.classList.add("opacity")
        btnPagar2.removeEventListener("click", subida);
    } else {
        btnPagar2.classList.remove("opacity")
        btnPagar2.addEventListener("click", subida)
    }
}, 500)