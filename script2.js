// Parte dos Alunos
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos de idade.`;
    }
  }
  
  class Aluno extends Pessoa {
    estudar() {
        return `${this.nome} está estudando.`;
    }
  }
  
  class Professor extends Pessoa {
    darAula() {
        return `${this.nome} está dando aula.`;
    }
  }
  
  // Criando os objetos
  const rafa = new Aluno("Rafael", 17);
  const raul = new Professor("Raul", 28);
  const magalas = new Aluno("Gustavo", 20);
  const nadja = new Professor("Nadja", 38);
  
  // Exibir no HTML
  document.getElementById("alunos").innerHTML = `
    <p>${rafa.apresentar()}</p>
    <p>${rafa.estudar()}</p>
    <p>${magalas.apresentar()}</p>
    <p>${magalas.estudar()}</p>
    <p>${raul.apresentar()}</p>
    <p>${raul.darAula()}</p>
    <p>${nadja.apresentar()}</p>
    <p>${nadja.darAula()}</p>
  `;