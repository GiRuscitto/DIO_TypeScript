const pessoa = {
    nome: "Giselle",
    idade: 20,
    profissao: "Desenvolvedora"
}

pessoa.idade = 21;

/*const Teste: (nome: string, idade: number, profissao: string) = {
    nome: "Teste",
    idade: 00,
    profissao: "Teste"
}*/

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Gi: Estudante = {
    nome: "Gi",
    idade: 21,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'Programação']
}