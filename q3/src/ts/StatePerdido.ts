import State from './State'
import StateTransportadora from './StateTransportadora'
import StateFinalizado from './StateFinalizado'

export default class StatePerdido extends State {
  constructor() {
    super()
    this.nomeState = 'Perdido'
  }

  public enviarPedido(): void {
    this.pedido.changeState(new StateTransportadora())
  }

  public realizarReembolso(): void {
    alert('Reembolso realizado com sucesso')
    this.pedido.changeState(new StateFinalizado())
  }
}