//      Javascript Orientado a Objetos

//##################################################################
//
//      Programação Orientada a Objetos
//
//      Pilares =>  - Herança -> objetos-filhos herdam propriedades
//                  de objetos-pai
//                  - Polimorfismo -> objetos podem herdar a mesma
//                  classe pai, mas se comportarem de formas diferentes
//                  quando seus métodos são invocados
//                  - Encapsulamento -> cada classe possui propriedades
//                  e métodos independentes do restante do código
//                  - Abstração -> extrair principais características
//
//##################################################################

//##################################################################
//
//      Protótipos => esqueleto de todos os objetos, ou seja, todos
//                  os objetos herdam propriedades e métodos de um
//                  prototype (Object.prototype).
//
//##################################################################

//##################################################################
//
//      Classes => Não existem nativamente, é utilizado um syntatic
//              sugar para facilitar a escrita.
//
//##################################################################

//      Escrita Antiga

var Meal = function(food) {
    this.food = food;
}

Meal.prototype.eat = function() {
    return '😋';
}


//      Escrita Nova (syntatic sugar)

class Meal {
    constructor (food) {
        this.food = food;
    } 

    eat() {
        return '😋';
    }
}

//      Anatomia de uma classe

class Animal {
    constructor(type = 'animal') {
        this.type = type;
    }

    // getter
    get type() {
        return this._type;
    }

    // setter
    set type(val) {
        this._type = val.toUpperCase();
    }

    makeSound() {
        console.log('Making animal sound');
    }
}

let a = new Animal();
console.log(a.type) // ANIMAL

class Cat extends Animal {
    constructor() {
        super('cat');
    }

    makeSound() {
        super.makeSound();
        console.log('Meow!');
    }
}

let b = new Cat();
console.log(b.type); // CAT