function filtrarPares(vector){
    return vector.filter(num=> num%2==0);
}

const numeros=[1,2,3,4,5,6.7,8];
console.log(filtrarPares(numeros));