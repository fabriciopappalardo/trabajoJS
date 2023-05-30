function calcularPrecioTotal() {
    console.log("ingreso a calcularPrecioTotal");

    let cantEnt = parseFloat(document.getElementById("cantEntradas").value);
    console.log("cantEnt: " + cantEnt);

    let porcDesc = parseFloat(document.getElementById("porcDescuento").value);
    console.log("porcDesc: " + porcDesc);

    let descuento = (cantEnt * 200) * porcDesc / 100;
    console.log("descuento: " + descuento);

    let precioFin = (cantEnt * 200) - descuento;
    console.log("totalApagar: " + precioFin);

    document.getElementById("totalApagar").value = "Total a pagar: $" + precioFin;
}
