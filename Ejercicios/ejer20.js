//Escribe una función factorial 
//que reciba un número 
//y devuelva su factorial.

//3! = 3x2x1= 6
//10!= 10x9x8x7x6x5x4x3x2x1= 3628800
//3628800
//0!= 1 
function factorial(n){
    if(n===0) return 1;
    return n*factorial(n-1);
}
console.log(factorial(10));