import Pedido from  './Pedido'
import Produto from  './Produto'

export default abstract class State {
  protected pedido: Pedido
  protected nomeState = ''

  public setContext(context: Pedido): void {
    this.pedido = context
  }

  public getState(): string {
    return this.nomeState
  }

  public adicionarProduto(produto: Produto): void {
    alert('Não é possível realizar essa operação no estado atual')
  }

  public removerProduto(index: number): void {
    alert('Não é possível realizar essa operação no estado atual')
  }

  public alterarPedido(): void {
    alert('Não é possível realizar essa operação no estado atual')
  }

  public fecharPedido(): void {
    alert('Não é possível realizar essa operação no estado atual')
  }

  public enviarPedido(): void {
    alert('Não é possível realizar essa operação no estado atual')
  }

  public cancelarPedido(): void {
    alert('Não é possível realizar essa operação no estado atual')
  }

  public pagar(): void {
    alert('Não é possível realizar essa operação no estado atual')
  }

  public pedidoPerdido(): void {
    alert('Não é possível realizar essa operação no estado atual')
  }

  public finalizarPedido(): void {
    alert('Não é possível realizar essa operação no estado atual')
  }

  public realizarReembolso(): void {
    alert('Não é possível realizar essa operação no estado atual')
  }

  public devolverPedido(): void {
    alert('Não é possível realizar essa operação no estado atual')
  }
}