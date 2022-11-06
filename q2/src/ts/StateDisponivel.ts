import State from "./State"
import StateDevedora from "./StateDevedora"
import StateFechada from "./StateFechada"

export default class StateDisponivel extends State {
  constructor() {
    super()
    this.nomeState = 'Disponível'
  }

  public realizarSaque(valor: number): void {
    if (valor <= this.conta.getSaldo()) {
      this.conta.setSaldo(this.conta.getSaldo() - valor)
    } else if (valor <= this.conta.getSaldo() + this.conta.getLimite()) {
      this.conta.setSaldo(this.conta.getSaldo() - valor)
      this.conta.mudarState(new StateDevedora())
    } else {
      alert('Não é possível realizar saque, valor solicitado acima do limite')
    }
  }

  public realizarDeposito(valor: number): void {
    this.conta.setSaldo(this.conta.getSaldo() + valor)
  }

  public fecharConta(): void {
    if (this.conta.getSaldo() === 0 && confirm('Tem certeza que deseja fechar a conta? Essa ação é irreversível')) {
      this.conta.mudarState(new StateFechada())
      this.conta.setDataEncerramento(new Date())
    } else {
      alert('Não é possível fechar conta com saldo, saque todo o dinheiro e tente novamente')
    }
  }
}