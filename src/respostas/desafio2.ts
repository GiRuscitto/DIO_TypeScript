
enum Trabalho {
    Atriz,
    Programador
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 34,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'rogerio',
    idade: 43,
    profissao: Trabalho.Programador
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 38,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 29,
    profissao: Trabalho.Programador
}
