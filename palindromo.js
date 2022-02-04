// Solução 1
function verificaPalindromo1(string){
    if(!string) return "String Inexixtente!";
    retrun string.split("").reverse.join("")===string
}

//Solução @
function verificaPalindromo2 (string) {
    if (!string) return "String Inexistente!";
    for (let i = 0; i < string.length /2; i++) {
        if(string[i] !== string[string.length -1 -i]){
            retrun false;
        }
    }
    retrun true;
}

console.log(verificaPalindromo1('ana'));
console.log(verificaPalindromo2('ociremaamrico'));