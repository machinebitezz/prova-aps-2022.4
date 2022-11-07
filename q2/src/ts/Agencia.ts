export default class Agencia {
  protected numero: number
  protected nome: string

  constructor(numero: number, nome: string) {
    this.numero = numero
    this.nome = nome
  }

  getNumero(): number {
    return this.numero
  }

  getNome(): string {
    return this.nome
  }
}