import { sumaTotal, pagoEfvo } from "../Funciones/Funcion.js";
import { Logica } from "../Logica/Logica.js";
import { productos } from "../Arrays/Arrays.js";

/*let productos = [
    { nombre: "Notebook", categoria: "Electronica", precio: 1500 },
    { nombre: "Remera", categoria: "Ropa", precio: 200 },
    { nombre: "AutoRC", categoria: "Juguetes", precio: 150 },                 (Lo transladé al archivo Arrays.js)
    { nombre: "Celular", categoria: "Electronica", precio: 600 },
    { nombre: "Zapatillas", categoria: "Ropa", precio: 350 },
    { nombre: "Muñecos", categoria: "Juguetes", precio: 100 }
];*/

let descuento1 = 0.10;
let descuento2 = 0.30;
let totalDescuentoElec = 0;
let totalDescuentoJug = 0;
let totalCompra = 0;
let totalCompraOrig = 0;
let pagoEfectivo = 0;
let promoContado = 0.50;

totalCompra = Logica(productos);

/*for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria == "Electronica") {
        totalDescuentoElec += productos[i].precio * descuento1;
        productos[i].precio = productos[i].precio * (1 - descuento1);            (Lo trasladé al archivo Logica.js)
    }
    if (productos[i].categoria == "Juguetes") {
        totalDescuentoJug += productos[i].precio * descuento2;
        productos[i].precio = productos[i].precio * (1 - descuento2);
    }
    totalCompra += productos[i].precio;
}*/
totalCompraOrig = sumaTotal(totalCompra.Compra, totalCompra.Elec, totalCompra.Jug);
pagoEfectivo = pagoEfvo(totalCompra.Compra, promoContado);

console.log(productos);
console.log("El valor total Original de la Compra es: " + totalCompraOrig);
console.log("El valor total de desc en Electronica es: " + totalCompra.Elec);
console.log("El valor total de desc en Juguetes es: " + totalCompra.Jug);
console.log("El valor total de la Compra Final es: " + totalCompra.Compra);
console.log("El valor total al pagar al contado es: " + pagoEfectivo);