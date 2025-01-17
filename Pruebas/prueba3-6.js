import { sumaTotal, pagoEfvo } from "../Funciones/Funcion.js";
import { Logica } from "../Logica/Logica.js";
import { productos } from "../Arrays/Arrays.js";

const descuento1 = 0.10;
const descuento2 = 0.30;
let totalDescuentoElec = 0;
const totalDescuentoJug = 0;
let totalCompra = 0;
let totalCompraOrig = 0;
let pagoEfectivo = 0;
let promoContado = 0.50;

totalCompra = Logica(productos);

totalCompraOrig = sumaTotal(totalCompra.Compra, totalCompra.Elec, totalCompra.Jug);
pagoEfectivo = pagoEfvo(totalCompra.Compra, promoContado);

console.log(productos);
console.log("El valor total Original de la Compra es: " + totalCompraOrig);
console.log("El valor total de desc en Electronica es: " + totalCompra.Elec);
console.log("El valor total de desc en Juguetes es: " + totalCompra.Jug);
console.log("El valor total de la Compra Final es: " + totalCompra.Compra);
console.log("El valor total al pagar al contado es: " + pagoEfectivo);


let mensaje = `Adding ${descuento1} and ${descuento2} gives ${descuento1 + descuento2}.`;
console.log(mensaje);