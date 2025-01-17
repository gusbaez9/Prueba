let productos = [
    { nombre: "Notebook", categoria: "Electronica", precio: 1500 }, //explicado en el archivo prueba3-0.
    { nombre: "Remera", categoria: "Ropa", precio: 200 },
    { nombre: "Celular", categoria: "Electronica", precio: 600 },
    { nombre: "Zapatillas", categoria: "Ropa", precio: 350 }
];

let descuento = 0.10;
let totalDescuento = 0; //declaro mas variables que voy a necesitar.
let totalCompra = 0;

for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria == "Electronica") {
        productos[i].precio = productos[i].precio * (1 - descuento);
    }

    if (productos[i].categoria === "Electronica") {
        totalDescuento += productos[i].precio * descuento;
    }
    totalCompra += productos[i].precio;
}

console.log(productos);
console.log("El valor total de descuento es: " + totalDescuento);
console.log("El valor total de la compra es: " + totalCompra);