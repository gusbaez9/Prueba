export function Logica(productos) {
    let totalDescuentoElec = 0;
    let totalDescuentoJug = 0;
    let descuento1 = 0.10;
    let descuento2 = 0.30;
    let totalCompra = 0;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].categoria == "Electronica") {
            totalDescuentoElec += productos[i].precio * descuento1;
            productos[i].precio = productos[i].precio * (1 - descuento1);
        }
        if (productos[i].categoria == "Juguetes") {
            totalDescuentoJug += productos[i].precio * descuento2;
            productos[i].precio = productos[i].precio * (1 - descuento2);
        }
        totalCompra += productos[i].precio;
    }
    //return [totalCompra, totalDescuentoElec, totalDescuentoJug];
    return { Compra: totalCompra, Elec: totalDescuentoElec, Jug: totalDescuentoJug };
}