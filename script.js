function totalPago(form) {

    const categoriaEstudiante = 0.8;
    const categoriaTrainee = 0.5;
    const categoriaJunior = 0.15;
    const valorEntrada = 200;

    var subTotal = valorEntrada * form.cantidadEntradas.value;
    if (form.descuento.value == "1") {
        subTotal = subTotal - (subTotal * categoriaEstudiante);
    }

    else if (form.descuento.value == "2") {
        subTotal = subTotal - (subTotal * categoriaTrainee);
    }

    else if ( form.descuento.value == "3") {
        subTotal = subTotal - (subTotal * categoriaJunior);
    }

    console.log ("Total: " + subTotal);
    document.getElementById('totalPago').innerText = "Total a pagar: $" + (subTotal);


}