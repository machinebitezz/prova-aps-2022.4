export default class Correntista {
  protected nome: string
  protected cpf: string

  constructor (nome: string, cpf: string) {
    this.nome = nome
    this.cpf = cpf
  }

  getCpf(): string {
    return this.cpf
  }

  getNome(): string {
    return this.nome
  }
}