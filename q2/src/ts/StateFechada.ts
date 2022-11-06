import State from "./State"

export default class StateFechada extends State {
  constructor() {
    super()
    this.nomeState = 'Fechada'
  }

  public realizarSaque(valor: number): void {
    alert('Não é possível realizar operações em conta fechada')
  }

  public realizarDeposito(valor: number): void {
    alert('Não é possível realizar operações em conta fechada')
  }

  public fecharConta(): void {
    alert('Não é possível realizar operações em conta fechada')
  }
}