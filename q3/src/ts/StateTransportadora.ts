import State from "./State";
import StateCancelado from "./StateCancelado";
import StateTransito from "./StateTransito";
import StatePerdido from "./StatePerdido";

export default class StateTransportadora extends State {
  constructor() {
    super()
    this.nomeState = 'Entregue à Transportadora'
  }

  public enviarPedido(): void {
    this.pedido.changeState(new StateTransito())
  }

  public cancelarPedido(): void {
    this.pedido.changeState(new StateCancelado())
  }

  public pedidoPerdido(): void {
    this.pedido.changeState(new StatePerdido())
  }
}