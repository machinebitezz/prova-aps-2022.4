 import State from  './State' 
import StateAberto from  './StateAberto'
import StatePendente from  './StatePendente'

export default class StateFechado extends State {
  constructor() {
    super()
    this.nomeState = 'Fechado'
  }

  public alterarPedido(): void {
    this.pedido.changeState(new StateAberto())
  }

  public pagar(): void {
    this.pedido.changeState(new StatePendente())
  }
}