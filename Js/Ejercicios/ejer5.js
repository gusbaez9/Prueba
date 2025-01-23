//CONDICIONES
let dia= 2;
let NombreDia;
switch(dia){
    case 1:
        NombreDia="Lunes";
        break;
    case 2:
        NombreDia="Martes";
        break;
    case 3:
        NombreDia="Miercoles";
        break;
    case 4:
        NombreDia="Jueves";
        break;
    case 5:
        NombreDia="Viernes";
        break;
    case 6:
        NombreDia="Sabado";
        break;
    case 7:
        NombreDia="Domingo";
        break;
    default:
        NombreDia="Dia no valido";
        break;
}
console.log(NombreDia)