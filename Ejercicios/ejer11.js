const number=[3,7,9,2,11];
let index=0;
let encontrado= false;
do{
    if(number[index]%2==0){
        console.log("El primer número par es: "+number[index]);
        encontrado=true;
    }
    index++;
}while(!encontrado && index< number.length);
