//      Error Handling

//#######################################################
//
//      Throw => retorna como erro de fato
//
//######################################################

function verificaPalindromo(string) {
    if(!string) throw "String invalida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat')

//########################################################
//
//      Try...Catch => Captura erros, e dá a possibilidade
//                     de manipula-lo
//
//########################################################

function verificaPalindromo(string) {
    if(!string) throw "String invalida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string);
    } catch(e) {
        console.log(e);
//      throw e;  
    }
}

tryCatchExemplo('');

//########################################################
//
//      Finally => é executado após as validações do 
//                  try...catch
//
//########################################################

function verificaPalindromo(string) {
    if(!string) throw "String invalida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string);
    } catch(e) {
        throw e;  
    } 
    finally {
        console.log(`A string enviada foi: ${string}`)
    }
}

tryCatchExemplo('');

//########################################################
//
//      Propriedades do objeto Error
//
//########################################################

new Error(message, fileName, lineNumber);

// todos os parametros são opcionais

const MeuErro = new Error('Mensagem inválida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;

//      O objetivo é que a função receba um array e 
//     retorne ele caso o seu tamanho corresponda ao
//     número enviado como parâmetro na função. Caso
//     contrário, um erro será lançado.
//      - Crie uma função que recebe um array e um número
//      - Realize as seguintes validações
//      - Se os parâmetros não forem enviados, lance um 
//      erro do tipo ReferenceError
//      - Se o array não for do tipo 'object', lance um 
//      erro do tipo TypeError
//      - Se o número não for do tipo 'number', lance um
//      erro do tipo TypeError
//      - Se o tamanho do array for diferente do número
//      enviado como parâmetro, lance um erro do tipo 
//      RangeError
//      - Utilize a declaração try...catch
//      - Filtre as chamadas de catch por cada tipo de 
//      erro utilizando o operador instanceof 

function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parametros");

        if(typeof arr !== 'object') throw new TypeError("Arr precisa ser do tipo object");

        if(typeof arr !== 'number') throw new TypeError("Num precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError("Tamanho invalido!");

    } catch (err) {

        if(e instanceof ReferenceError) {

            console.log("Este erro é um ReferenceError!");
            console.log(e.message);

        } else if (e instanceof TypeError) {

            console.log("Este erro é um TypeError!");
            console.log(e.message);

        } else if (e instanceof RangeError) {

            console.log("Este erro é um RangeError!");
            console.log(e.message);

        } else {

            console.log("Ocorreu um erro não esperado: " + e);

        }

    }
}

console.log(validaArray());
console.log(validaArray(5, 5));
console.log(validaArray([], 'a'));
console.log(validaArray([], 5));
console.log(validaArray([1, 2, 3, 4, 5], 5));