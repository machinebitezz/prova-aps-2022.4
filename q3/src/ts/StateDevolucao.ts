import State from './State'
import StateFinalizado from './StateFinalizado'

export default class StateDevolucao extends State {
  constructor() {
    super()
    this.nomeState = 'Em devolução'
  }

  public devolverPedido(): void {
    this.pedido.changeState(new StateFinalizado())
    alert('Pedido devolvido com sucesso')
    this.realizarReembolso()
  }

  public realizarReembolso(): void {
    alert('Reembolso realizado com sucesso')
  }
}