import { productos } from "../Arrays/Arrays.js";
import { servicios } from "../Arrays/Arrays.js";

export function total2(arraySub) {
    let sum = 0;
    for (let i = 0; i < arraySub.length; i++) {
        sum += arraySub[i];
    }
    return sum;
}
export function sumaTotal(num1, num2, num3) {   //agregue esta nueva linea.
    return num1 + num2 + num3;
    //return math.sum(arraySub)//
}

export function pagoEfvo(num1, num2) {
    return num1 * num2;
}

export function creaRegistroTabla1(productos) {
    const tableBody = document.getElementById("Tabla1").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    productos.forEach(item => {
        const row = document.createElement("tr"); //crea una nueva fila en la tabla.

        const nameCell = document.createElement("td"); //crea una celda para nombre.
        nameCell.textContent = item.nombre;
        row.appendChild(nameCell);

        const categoriaCell = document.createElement("td"); //crea una celda para categoria.
        categoriaCell.textContent = item.categoria;
        row.appendChild(categoriaCell);

        const precioCell = document.createElement("td"); //crea una celda para precio.
        precioCell.textContent = item.precio;
        row.appendChild(precioCell);

        tableBody.appendChild(row);
    });
}

export function creaRegistroTabla2(servicios) {
    const tableBody = document.getElementById("Tabla2").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    servicios.forEach(item => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.nombre;
        row.appendChild(nameCell);

        const categoriaCell = document.createElement("td");
        categoriaCell.textContent = item.categoria;
        row.appendChild(categoriaCell);

        const precioCell = document.createElement("td");
        precioCell.textContent = item.precio;
        row.appendChild(precioCell);

        tableBody.appendChild(row);
    });
}

export function aplicarDescuento() {
    let descuento1 = 0.10;
    document.getElementById("btn1");
    productos.forEach(item => {
        if (item.categoria === "Electronica") {
            item.precio = (item.precio - (item.precio * descuento1));
        }
    }
    )
};

/*const boton = document.getElementById("btn1");
boton addEventListener("click", function aplicarDescuento(){
    productos.forEach(item => {
        if (item.categoria === "Electronica") {
            item.precio = (item.precio - (item.precio * descuento1));
        }
    }
    )
});*/
