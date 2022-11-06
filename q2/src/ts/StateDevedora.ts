import State from "./State"
import StateDisponivel from "./StateDisponivel"

export default class StateDevedora extends State {
  private interval: ReturnType<typeof setInterval>
  private days: number = 0
  constructor() {
    super()
    this.nomeState = 'Devedora'

    this.interval = setInterval(() => {
      this.days++
      if (this.days === 30) {
        this.aplicarJuros()
        this.days = 0
      }

      document.querySelector('#dias').innerHTML = (30-this.days).toString()
    }, 1000)
  }

  private aplicarJuros(): void {
    this.conta.setSaldo(this.conta.getSaldo() * 1.1)
    document.querySelector('#saldo').innerHTML = (this.conta.getSaldo()/100).toFixed(2).toString()
  }

  public realizarSaque(valor: number): void {
    if (valor <= this.conta.getSaldo() + this.conta.getLimite()) {
      this.conta.setSaldo(this.conta.getSaldo() - valor)
    } else {
      alert('Não foi possível realizar saque, valor solicitado acima do limite')
    }
  }

  public realizarDeposito(valor: number): void {
    this.conta.setSaldo(this.conta.getSaldo() + valor)
    if (this.conta.getSaldo() >= 0) {
      clearInterval(this.interval)
      this.conta.mudarState(new StateDisponivel())
      document.querySelector('#dias').innerHTML = 'Não está em debito'
    }
  }

  public fecharConta(): void {
    alert('Não é possível fechar conta devedora')
  }
}