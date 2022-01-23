//      Colections

//########################################################
//
//      Map =>  - podem ter chaves de qualquer tipo
//              - possuem a propiedades length
//              - são mais fáceis de iterar
//              - utilizado quando o valor das chaves é
//                desconhecido
//              - os valores tem o mesmo tipo
//
//########################################################

const myMap = new Map();

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get('apple');
// "fruit"

myMap.delete("apple")
// true

myMap.get("apple")
// undefined

//      Crie uma função que retorna o nome dos membros
//     de um Map que tem o papel 'ADMIN' no sistema.
//      Crie uma função getAdmins que recebe um Map;
//      Crie um Map e popule-o com nomes de usuários
//     e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
//      Dentro de getAdmins, utilize o loop for...of 
//     para retornar uma lista com os nomes dos usuários
//     que são administradores.

function getAdmins(map) {
    let admins = [];

    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }

    return admins
}

const usuarios = new Map();
usuarios.set('Luiz','Admin');
usuarios.set('Igor','Admin');
usuarios.set('Natalia','User');
usuarios.set('Henrique','User');
usuarios.set('Jorge','Admin');

console.log(getAdmins(usuarios))

//########################################################
//
//      Set =>  - possuem valores únicos
//              - ao invés de possuírem a propriedade length,
//                consulta-se o número de registro através da
//                propriedade size
//              - não possui os métodos map, filter, reduce,
//                etc
//
//########################################################

const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1); 
// true
mySet.has(3); 
// false

mySet.delete(5);

//      Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5],
//     retorne outro array apenas com valores únicos.

const myArr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(myArr))