function substituiPares(numeros){
    if (!numeros) return -1;
    if (!numeros.length) return -1;

    for (let ind = 0; 1 < numeros.length; ind++){
        if (numeros[ind] === 0){
            console.log("Este Número já é Zero!!")
        } else if (numeros[ind] % 2 === 0){
            console.log(`Substituindo ${numeros[ind]} por 0...`);
            numeros[ind] = 0;
        }
    }
    return numeros;
}

let num = [1, 2, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(num));