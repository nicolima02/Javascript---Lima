arroba = false;

while (arroba == false) {
    let mail = prompt("Ingrese su mail: ");
    for (i in mail) {
        if (mail[i] == "@") {
            arroba = true
        }
    }
    if (arroba == false) {
        alert("No es un mail valido!")
    } else {
        alert("Bienvenido! " + mail)
    }
}