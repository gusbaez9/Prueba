//Escribe una función que tome una cadena 
//como entrada y devuelva 
//la cadena invertida.
function invertir(cadena){
    return cadena.split('').reverse().join('');
   }
   console.log(invertir('TWITCH'));
//Leo
//['L','e','o'] split
//['o','e','L'] reverse
// oel join