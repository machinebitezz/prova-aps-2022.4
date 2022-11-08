import State from './State'
import StateCancelado from './StateCancelado'
import StateEntregue from './StateEntregue'
import StatePerdido from './StatePerdido'
import StateTransportadora from './StateTransportadora'

export default class StateTransito extends State {
  constructor(){
    super()
    this.nomeState = 'Em Trânsito'
  }

  public devolverPedido() {
    this.pedido.changeState(new StateTransportadora())
  }

  public pedidoPerdido(): void {
    this.pedido.changeState(new StatePerdido())
  }

  public enviarPedido(): void {
    this.pedido.changeState(new StateEntregue())
  }

  public cancelarPedido(): void {
    this.pedido.changeState(new StateCancelado)
  }
}