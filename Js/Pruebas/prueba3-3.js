let productos = [
    { nombre: "Notebook", categoria: "Electronica", precio: 1500 },
    { nombre: "Remera", categoria: "Ropa", precio: 200 },
    { nombre: "AutoRC", categoria: "Juguetes", precio: 150 },
    { nombre: "Celular", categoria: "Electronica", precio: 600 },
    { nombre: "Zapatillas", categoria: "Ropa", precio: 350 },
    { nombre: "Muñecos", categoria: "Juguetes", precio: 100 }
];

let descuento1 = 0.10;
let descuento2 = 0.30;
let totalDescuentoElec = 0;
let totalDescuentoJug = 0;
let totalCompra = 0;
let totalCompraOrig = 0;

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
    totalCompraOrig = totalCompra + totalDescuentoElec + totalDescuentoJug;
}

console.log(productos);
console.log("El valor total Original de la Compra es: " + totalCompraOrig);
console.log("El valor total de desc en Electronica es: " + totalDescuentoElec);
console.log("El valor total de desc en Juguetes es: " + totalDescuentoJug);
console.log("El valor total de la Compra Final es: " + totalCompra);