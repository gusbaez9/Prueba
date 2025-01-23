import { sumaTotal, pagoEfvo } from "../Funciones/Funcion.js";
import { Logica } from "../Logica/Logica.js";
import { productos } from "../Arrays/Arrays.js";
//import { descuento1, descuento2, totalDescuentoElec, totalDescuentoJug, totalCompra, totalCompraOrig, pagoEfectivo, promoContado } from "../Variables/Variables.js";

let totalCompra = 0;
let totalCompraOrig = 0;
let pagoEfectivo = 0;
let promoContado = 0.50;

totalCompra = Logica(productos);

totalCompraOrig = sumaTotal(totalCompra.Compra, totalCompra.Elec, totalCompra.Jug);  //agregue esta nueva linea.
pagoEfectivo = pagoEfvo(totalCompra.Compra, promoContado);

let productosElec = productos.filter(productos => productos.categoria.includes("Electronica"));

console.log(productos);
console.log(productosElec);
console.log("El valor total Original de la Compra es: " + totalCompraOrig);
console.log("El valor total de desc en Electronica es: " + totalCompra.Elec);
console.log("El valor total de desc en Juguetes es: " + totalCompra.Jug);
console.log("El valor total de la Compra Final es: " + totalCompra.Compra);
console.log("El valor total al pagar al contado es: " + pagoEfectivo);


//let mensaje = `Adding ${descuento1} and ${descuento2} gives ${descuento1 + descuento2}.`; //solo funciona con constantes.
//console.log(mensaje);