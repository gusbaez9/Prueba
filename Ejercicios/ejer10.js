let sum=0;
let count=0;
let nota;
while(true){
    nota= parseInt(prompt("Ingrese una nota(0-100), otro valor para terminar): "),10);
    if(nota<0 || nota>100){
        break;
    }
    sum+=nota;
    count++;
}
const promedio= count>0 ? sum/count:0; // esto es lo mismo que hacer un If, pero en una sola linea.
console.log("El promedio de las notas es: "+promedio);