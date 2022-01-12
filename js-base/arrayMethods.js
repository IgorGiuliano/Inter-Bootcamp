//      Métodos importantes para Arrays

//#############################################################
//
//      Map =>      - cria um novo array
//                  - não modifica o array original
//                  - realiza as operações em ordem
//
//#############################################################

let arr = []
// arr.map(callback, thisArg)
// callback(item,index,array)
//      função a ser executada e, cada elemento
// thisArg (opcional) valor de this dentro da função de callback

//              map vs forEach

const array = [1, 2, 3, 4, 5];
array.map((item) => item * 2); // [2,4,6,8,10]

array.forEach((item) => item * 2); // undefined
const aux = array.forEach((item) => item * 2); // [2,4,6,8,10]


//#############################################################
//
//      Filter =>       - cria um novo array
//                      - não modifica o array original          
//
//#############################################################

let arr1 = []
// arr1.filter(callback, thisArg)
// callback => função a ser executada e, cada elemento
// thisArg (opcional) => valor de this dentro da função de callback

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
frutas.filter((fruta) => fruta.includes('maçã')); 
// ['maçã fuji', 'maçã verde']


//#############################################################
//
//      Reduce =>       - executa uma função em todos os elementos
//                      do array, retornando um valor único
//
//#############################################################

let arr2 = []
// arr2.reduce(callbackFn, initialValue);
// callbackFn => função a ser executada a partir do acumulador
// initialValue (opcional) => valor sobre o qual o retorno final irá atuar

const callbackFn = function(accumulator, currentValue, index, array) {
    // do something
}

// arr2.reduce(callbackFn, initialValue);

// accumulator/prevValue => acumulador de todas as chamadas de callbackFn
// currentValue => elemento atual sendo acessado pela função


//#################################################################
//
//      Pratique a sintaxe de multiplicação de números, uma vez
//     utilizando o parâmetro this de um objeto criado por você,
//     e depois sem ele.
//
//#################################################################

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2, 3, 4, 5];

console.log('this -> maçã: '+mapComThis(nums, maca));
// this -> maçã: 2,4,6,8,10

console.log('this -> laranja '+mapComThis(nums, laranja));
// this -> laranja 3,6,9,12,15

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    })
}

console.log(mapSemThis(nums));
// [ 2, 4, 6, 8, 10 ]

//#################################################################
//
//      Filtre e retorne todos os números pares de um array.
//
//#################################################################

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const arrMisto = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(filtraPares(arrMisto));
// [ 2, 4, 6, 8 ]

//#################################################################
//
//      Some todos os números de um array
//      Crie uma função que recebe uma lista de preços e um número
//     representando o saldo disponível. Calcule qual será o saldo
//     final após subtrair todos os preços da lista enviada.
//
//#################################################################

function somaNumero(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    });
}

const arrReduce = [1, 2, 3];

console.log(somaNumero(arrReduce));
// 6

const lista = [
    {
        nome: 'sabão em pó',
        preco: 27.12
    },
    {
        nome: 'cereal',
        preco: 12.5
    },
    {
        nome: 'toalha',
        preco: 35.99
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco
    }, saldoDisponivel)
}

console.log('o saldo disponível é ' + calculaSaldo(saldoDisponivel,lista))