import State from './State'
import StateDevolucao from './StateDevolucao'
import StateFinalizado from './StateFinalizado'

export default class StateEntregue extends State {
  private interval: ReturnType<typeof setInterval>
  private count: number = 0
  constructor() {
    super()
    this.nomeState = 'Entregue'
    this.interval = setInterval(() => {
      this.count += 1

      if (this.count === 30) {
        this.finalizarPedido()
      }

      document.querySelector('#dias').innerHTML = `Dias para devolver: ${(30-this.count).toString()} dias`
    }, 1000)
  }

  public devolverPedido(): void {
    this.clearInterval()
    this.pedido.changeState(new StateDevolucao())
  }

  public finalizarPedido(): void {
    this.clearInterval()
    this.pedido.changeState(new StateFinalizado())
  }

  private clearInterval(): void {
    document.querySelector('#estado').innerHTML = 'Finalizado'
    clearInterval(this.interval)
  }
}