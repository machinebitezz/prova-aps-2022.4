import Produto from  './Produto' 
import State from  './State' 
import StateAberto from  './StateAberto' 

export default class Pedido {
  protected state: State
  protected carrinho: Produto[] = []

  constructor() {
    this.changeState(new StateAberto())
  }

  public changeState(state: State) {
    this.state = state
    this.state.setContext(this)
  }

  public adicionarProduto(produto: Produto): void {
    this.state.adicionarProduto(produto)
  }

  public removerProduto(index: number): void {
    this.state.removerProduto(index)
  }

  public alterarPedido(): void {
    this.state.alterarPedido()
  }

  public fecharPedido(): void {
    this.state.fecharPedido()
  }

  public enviarPedido(): void {
    this.state.enviarPedido()
  }

  public cancelarPedido(): void {
    this.state.cancelarPedido()
  }

  public pagar(): void {
    this.state.pagar()
  }

  public pedidoPerdido(): void {
    this.state.pedidoPerdido()
  }

  public finalizarPedido(): void {
    this.state.finalizarPedido()
  }

  public realizarReembolso(): void {
    this.state.realizarReembolso()
  }

  public devolverPedido(): void {
    this.state.devolverPedido()
  }

  public getCarrinho(): Produto[] {
    return this.carrinho
  }

  public setCarrinho(carrinho: Produto[]) {
    this.carrinho = carrinho
  }

  public getState(): string {
    return this.state.getState()
  }
}