import State from './State'
import StateAberto from './StateAberto'
import StateCancelado from './StateCancelado'
import StateTransportadora from './StateTransportadora'

export default class StatePentente extends State {
  constructor() {
    super()
    this.nomeState = 'Pendente'
  }

  public alterarPedido(): void {
    this.pedido.changeState(new StateAberto())
  }

  public enviarPedido(): void {
    this.pedido.changeState(new StateTransportadora())
  }

  public cancelarPedido(): void {
    this.pedido.changeState(new StateCancelado())
  }
}