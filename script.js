class Hospital {
  #cpf;
  constructor(nome, idade, funcao, cpf) {
    this.nome = nome;
    this.idade = idade;
    this.funcao = funcao;
    this.#cpf = cpf;
  }
  verCpf() {
    return `***********`
  }
  mostrar() {
    return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos. Minha função é ${this.funcao}, CPF: ${this.verCpf()}`;
}
}

const yago = new Hospital ("Yago", 17, "recepcionista, recepciono muito bem", 12345678910)
const gustavo = new Hospital ("Gustavo",20, "fisioterapeuta, eu amo pessoa quebrada", 12345678911)
const rafael = new Hospital ("Rafael", 17, "clinico geral e eu amo minha profissão", 12345678912)
const alexandre = new Hospital ("Alexandre", 17, "segurança, seguro de tudo", 12345678913)
const natalia = new Hospital ("Natalia", 17, "ginecologista", 12345678914)
const nicolly = new Hospital ("Nicolly", 16, "pediatra, amo crianças", 12345678915)
const lara = new Hospital ("Lara", 18, "obstetra, amo fazer minhaprofissão", 12345678916)

document.getElementById("info").innerHTML=
`<p>${yago.mostrar()}</p>
 <p>${gustavo.mostrar()}</p>
 <p>${rafael.mostrar()}</p>
 <p>${alexandre.mostrar()}</p>
 <p>${natalia.mostrar()}</p>
 <p>${nicolly.mostrar()}</p>
 <p>${lara.mostrar()}</p>`

