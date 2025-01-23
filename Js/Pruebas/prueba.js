let notaFinal = prompt("Por favor ingresar nota");
let bFlagNota = (notaFinal == 7);
if (notaFinal > 7) {
    alert("Usted aprobó el Curso")
} else if (notaFinal < 5) {
    alert("Usted desaprobó el Curso")
} else if (notaFinal == 7) {
    alert("Usted desaprobó el curso, pero tiene una nueva oportunidad")
    //bFlagNota = true;
}
if (bFlagNota){
let notaRecup = prompt("Por favor ingresar nota de recuperatorio");

if (notaRecup > 6) {
    alert("Usted aprobó a penas el Curso :D")
} else if (notaRecup < 5) {
    alert("Usted desaprobó el curso :(")
}
}
/*let notaFinal = parseFloat(prompt("Por favor ingrese su nota final:"));

if (notaFinal > 7) {
    alert("Usted aprobó el Curso");
} else if (notaFinal < 5) {
    alert("Usted desaprobó el Curso");
} else if (notaFinal === 7) {
    alert("Usted desaprobó el curso, pero tiene una nueva oportunidad");
} else {
    alert("Usted tiene una calificación entre 5 y 7. Necesita una nueva oportunidad.");
}

let notaRecup = parseFloat(prompt("Por favor ingrese su nota de recuperatorio:"));

if (notaRecup > 6) {
    alert("Usted aprobó el curso de recuperatorio :D");
} else if (notaRecup < 5) {
    alert("Usted desaprobó el curso de recuperatorio :(");
} else if (notaRecup === 6) {
    alert("Usted aprobó el recuperatorio con 6. ¡Felicidades!");
} else {
    alert("Nota no válida");
}*/