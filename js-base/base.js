//################################################################
//
//     Função
//
//################################################################

function nome(parametros) {
    return;
}

//################################################################
//
//      Função Anônima => uma variável pode armazenar uma função
//
//################################################################

const soma = function (a,b) {
    return a + b;
}

soma(1, 2); //3
soma(5, 4); //9

//################################################################
//
//     Função Autoinvocável => uma função anônima entre parênteses,
//                             seguida por outro par de parênteses,
//                             que representa sua chamada
//
//################################################################

(
    function() {
        let name = "Immediately Invoked Function Expression";
        return name;
    }
)();

const somaAutoinvocavel = (
    function(a, b) {
        return a + b;
    }
)(1,2);

console.log(somaAutoinvocavel) //3

//################################################################
//
//     Callbacks => utilizando callbacks, é possível ter maior 
//                  controle da ordem de chamadas.
//
//################################################################

const calcular = function(operacao, num1, num2) {
    return operacao(num1, num2);
};

const soma = function(num1, num2) {
    return num1 + num2;
};

const subtracao = function(num1, num2) {
    return num1 - num2;
};

const resultSoma = calcular(soma, 1, 2);
const resultSubtracao = calcular(subtracao, 1, 2);

console.log(resultSubtracao); // -1
console.log(resultSoma); // 3


//################################################################
//
//     Manipulação de parametros
//
//################################################################

function exponencial(array, num = 1) {
    const result = [];

    for(let i = 0; i< array.length; i++) {
        result.push(array[i] ** num);
    }

    return result;
}

exponencial([1, 2, 3, 4]); // como num não recebe um valor, ele usa o valor padrão
// [1, 2, 3, 4]

exponencial([1, 2, 3, 4], 4);
// [1, 8, 27, 64]

//################################################################
//
//     Objeto "arguments" => array com todos os parametros passados
//                           quando a função foi invocada.
//
//################################################################

function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

findMax(1, 2, 3, 6, 90, 1);

function showArgs() {
    return arguments;
}

showArgs(1, 2, [1, 2, 3], "string", {nome: "nome"});

//################################################################
//
//     Arrays -> Spread => forma de lidar separadamente com elementos
//                         de um array
//
//################################################################

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

//################################################################
//
//     Arrays -> Rest => combina os argumentos em um array
//
//################################################################

function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho(); // 0
confereTamanho(1, 2); // 2
confereTamanho(3, 4, 5); // 3

//################################################################
//
//     Object -> Deconstructing => entre chaves, é possível filtrar
//                                 apenas os dados que interessam
//
//################################################################

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user); // 42
getFullName(user); // John Doe

//################################################################
//
//     if/else
//
//################################################################

function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if(ehNegativo) {
        return false;
    }

    return true;
}

numeroPositivo(2) // true
numeroPositivo(-2) // false

//################################################################
//
//     switch/case
//
//################################################################

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

getAnimal(1); // cão
getAnimal(4); // peixe
getAnimal("1"); // peixe

//################################################################
//
//     for
//
//################################################################

function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros); // [4, 66, 912, 712, 80]

//    for...in => loop entre propriedades enumeráveis de um objeto

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "Igor",
    idade: "19",
    cidade: "Embu das Artes"
}

forInExemplo(meuObjeto);
// Igor
// 19
// Embu das Artes


//    for...of => loop entre estruturas iteráveis

function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra);
    }
}

const palavra = "ana";
logLetras(palavra)
// a
// n
// a

//################################################################
//
//     while
//
//################################################################

function exemploWhile() {
    let num = 0;

    while(num <= 5) {
        console.log(num);
        num++;
    }
}

exemploWhile();
// 0
// 1
// 2
// 3
// 4
// 5

function exemploDoWhile() {
    let num = 0;

    do {
        console.log(num);
        num++;
    } while (num <= 5)
}

exemploDoWhile();
// 0
// 1
// 2
// 3
// 4
// 5
// caso num fosse 6, ele seria exibido, pois apenas após a exibição será validada a condição de parada

//################################################################
//
//     this => referencia ao contexto 
//
//################################################################

const usuario = {
    firstName: "Igor",
    lastName: "Giuliano",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

usuario.fullName(); // Igor Giuliano
usuario.getId(); // 1

console.log(this) // {}

(
    function() {
        console.log(this); // Object [global]
    }
)();

const pessoa = {
    nome: "Igor"
};

const animal = {
    nome: "Julie"
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa); // Igor
getSomething.call(animal); // Julie

getSomething.apply(pessoa); // Igor
getSomething.apply(animal); // Julie

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); // 12
soma.apply(myObj, [1, 5]); // 12


const retornaNomes = function() {
    return this.nome;
};

let igor = retornaNomes.bind({ nome: 'igor' }); // bind cloana a estrutura da função onde é chamada e aplica o valor do objeto passado como parametro

igor(); // Igor


//################################################################
//
//     Arrow Function 
//
//################################################################

const olaMundo = function() {
    return "Ola Mundo";
}

const holaMundo = () => {
    return "Hola Mundo"
}

const helloWorld = () => "Hello World";

const soma = (a, b) => a + b;
soma(4, 6); // 10

const soma = a => a;
soma(4); // 4

/* 
    Arrows Functions não aceitam metodos para modificar o valor de this, não existe objeto "arguments", o construtor não pode ser utilizado.
*/

//################################################################
//
//      Crie uma função que recebe o array alunos e um número que 
//    irá representar a média final;
//      Percorra o array e popule um novo array auxiliar apenas 
//    com os alunos cujas notas são maiores ou iguais à média final;
//      Utilize a técnica "object destructuring" para manipular
//    as propriedades desejadas de cada /aluno. 
//
//################################################################

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B', 
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B', 
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C', 
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C', 
    },
]

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }    
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5))

//################################################################
//
//      Dada a função calculaIdade, utilize os métodos call e 
//    apply para modificar o valor de this. 
//
//################################################################

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa = {
    nome: "Igor",
    idade: 19
};

const animal = {
    nome: "Julie",
    idade: 12
};

console.log(calculaIdade.call(pessoa, 30));
console.log(calculaIdade.call(animal, 4));

console.log(calculaIdade.apply(pessoa, [30]));
console.log(calculaIdade.apply(animal, [4]));