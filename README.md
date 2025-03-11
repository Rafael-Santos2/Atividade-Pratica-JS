# 🌟 Projeto Hospital e Escola de Medicina

## Descrição
Este projeto apresenta uma estrutura interativa de um hospital e uma escola de medicina, onde utilizamos JavaScript para criar classes de Funcionários, Alunos e Professores. A interface HTML exibe informações dinâmicas sobre os membros do hospital e da escola.

## 🔧 Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)

## 📁 Estrutura do Projeto
```
/
├── index.html        # Página principal - Funcionários do hospital
├── alunos.html       # Página secundária - Alunos e professores de medicina
├── script.js         # Script dos funcionários do hospital
├── script2.js        # Script dos alunos e professores
├── README.md         # Documentação do projeto
```

## 🔢 Como Executar o Projeto
1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Para visualizar a página dos alunos e professores, clique no botão `Veja nossos Alunos e Professores`.

## 🏆 Funcionalidades
### 1️⃣ Página de Funcionários (Hospital)
- Exibe uma lista de funcionários com suas respectivas funções.
- O CPF dos funcionários é ocultado para segurança.

### 2️⃣ Página de Alunos e Professores (Escola de Medicina)
- Exibe informações sobre alunos e professores de medicina.
- Professores podem dar aula e alunos podem estudar.

## 🔬 Exemplo de Código
### Classe `Hospital` (Funcionários)
```javascript
class Hospital {
  #cpf;
  constructor(nome, idade, funcao, cpf) {
    this.nome = nome;
    this.idade = idade;
    this.funcao = funcao;
    this.#cpf = cpf;
  }
  verCpf() {
    return `***********`;
  }
  mostrar() {
    return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos. Minha função é ${this.funcao}, CPF: ${this.verCpf()}`;
  }
}
```

### Classe `Pessoa` (Alunos e Professores)
```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos de idade.`;
    }
}
```

## 📈 Melhorias Futuras
- Adicionar interação com botões.
- Implementar um banco de dados para armazenar informações.
- Criar um sistema de login para diferentes tipos de usuários.

---
**Desenvolvido com ❤ por [Rafael Araujo]**

