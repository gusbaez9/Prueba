
let productos = [
    { nombre: "Notebook", categoria: "Electronica", precio: 1500 }, //cree un Array que contiene varios obejtos y caracteristicas.
    { nombre: "Remera", categoria: "Ropa", precio: 200 },
    { nombre: "Celular", categoria: "Electronica", precio: 600 },
    { nombre: "Zapatillas", categoria: "Ropa", precio: 350 }
];

let descuento = 0.10; //defino la variable del descuento.

for (let i = 0; i < productos.length; i++) { //comienzo con un bufle Flor definiendo la variable "i".
    if (productos[i].categoria == "Electronica") { //agrego una condición, en este caso que se aplique solo en los productos de esa categoria.
        productos[i].precio = productos[i].precio * (1 - descuento); //aplico el descuento.
    }
}

console.log(productos); //agrego un mensaje en consola que me devuelve el array con el descuento ya aplicado en el precio de los productos.