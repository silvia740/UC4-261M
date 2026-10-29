📌 O que é Polimorfismo?
O termo polimorfismo significa “muitas formas”. Na Programação Orientada a Objetos (POO), polimorfismo é a capacidade de objetos de diferentes classes (que têm um mesmo ancestral) responderem de maneiras diferentes ao mesmo método.

👉 Ou seja, o mesmo método pode ter diferentes implementações, dependendo da classe que o chama.

// Classe base
export class Animal {
    falar(): void {
        console.log("O animal faz um som.");
    }
}

// Subclasses sobrescrevendo o método falar
export class Cachorro extends Animal {
    falar(): void {
        console.log("O cachorro late");
    }
}

export class Gato extends Animal {
    falar(): void {
        console.log("O gato mia");
    }
}

// Testando polimorfismo
const animais: Animal[] = [new Cachorro(), new Gato(), new Animal()];

animais.forEach(animal => {
    animal.falar(); 
});

Note que o método chamado foi sempre falar(), mas cada classe respondeu de um jeito diferente.

📌 Exemplo 2:
// Classe base
export class Funcionario {
    calcularSalario(): number {
        return 1000; // salário base
    }
}

// Subclasse: Desenvolvedor
export class Desenvolvedor extends Funcionario {
    calcularSalario(): number {
        return 3000; // salário específico do desenvolvedor
    }
}

// Subclasse: Gerente
export class Gerente extends Funcionario {
    calcularSalario(): number {
        return 5000; // salário específico do gerente
    }
}

// Testando polimorfismo
const funcionarios: Funcionario[] = [
    new Funcionario(),
    new Desenvolvedor(),
    new Gerente()
];

funcionarios.forEach(func => {
    console.log(`Salário: R$ ${func.calcularSalario()}`);
});

📝 Exercícios
1 - Crie uma classe Veiculo com um método mover(). Depois crie as subclasses Carro e Bicicleta, cada uma sobrescrevendo o método para mostrar uma mensagem diferente. Teste criando uma lista de veículos e chamando mover() para todos.

2 - Crie uma classe Pagamento com um método processar(). Depois crie CartaoCredito e Boleto, cada um implementando a lógica do pagamento de forma diferente. Crie um array de pagamentos e processe todos usando polimorfismo.

