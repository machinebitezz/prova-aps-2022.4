import Produto from './Produto'
import State from './State'

export default class StateFinalizado extends State {
  constructor() {
    super()
    this.nomeState = 'Finalizado'
  }

  public adicionarProduto(produto: Produto): void {
    alert('Pedido finalizado, não é possível realizar operações')
  }

  public removerProduto(index: number): void {
    alert('Pedido finalizado, não é possível realizar operações')
  }

  public alterarPedido(): void {
    alert('Pedido finalizado, não é possível realizar operações')
  }

  public fecharPedido(): void {
    alert('Pedido finalizado, não é possível realizar operações')
  }

  public enviarPedido(): void {
    alert('Pedido finalizado, não é possível realizar operações')
  }

  public cancelarPedido(): void {
    alert('Pedido finalizado, não é possível realizar operações')
  }

  public pagar(): void {
    alert('Pedido finalizado, não é possível realizar operações')
  }

  public pedidoPerdido(): void {
    alert('Pedido finalizado, não é possível realizar operações')
  }

  public finalizarPedido(): void {
    alert('Pedido finalizado, não é possível realizar operações')
  }
}