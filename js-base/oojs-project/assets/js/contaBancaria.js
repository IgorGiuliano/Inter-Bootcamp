//#####################################################################
//
//      Nesta atividade, vamos testar os conceitos de Orientação a 
//     Objetos simulando a criação de diversos tipos de contas
//     bancárias e operações disponíveis em cada uma.
//      - Crie a classe ContaBancaria, que possui os parâmetros  
//     agencia, numero, tipo e saldo;
//      - Dentro de ContaBancaria, construa o getter e o setter de saldo;
//      - Dentro de ContaBancaria, crie os métodos sacar e depositar;
//      - Crie uma classe-filha chamada ContaCorrente que herda todos 
//     esses parâmetros e ainda possua o parâmetro cartaoCredito;
//      - Ainda em ContaCorrente, construa o getter e o setter de 
//     cartaoCredito;
//      - Ainda em ContaCorrente, faça com que o tipo seja 'conta 
//     corrente' por padrão;
//      - Crie uma classe-filha chamada ContaPoupanca que herda todos os 
//     parâmetros de ContaBancaria;
//      - Crie uma classe-filha chamada ContaUniversitaria que herda 
//     todos os parâmetros de ContaBancaria;
//      - Faça com que o método saque de ContaUniversitaria apenas seja 
//     capaz de sacar valores menores que 500 reais.
//
//#####################################################################

class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero  = numero;
        this.tipo    = tipo;
        this._saldo  = 0;
    }
    
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return "operação negada";
        }
        
        this._saldo = this._saldo - valor;
		return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, saldo);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500) {
            return 'operação negada';
        }

        this._saldo = this._saldo - valor;
    }
}