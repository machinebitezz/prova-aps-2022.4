import Produto from  './Produto' 
import State from  './State' 
import StateFechado from  './StateFechado' 

export default class StateAberto extends State {
  constructor() {
    super()
    this.nomeState = 'Em aberto'
  }

  public adicionarProduto(produto: Produto): void {
    const carrinho = this.pedido.getCarrinho()
    carrinho.push(produto)
    this.pedido.setCarrinho(carrinho)
  }

  public removerProduto(index: number): void {
    const carrinho = this.pedido.getCarrinho()
    carrinho.splice(index, 1)
    this.pedido.setCarrinho(carrinho)
  }

  public fecharPedido(): void {
    this.pedido.changeState(new StateFechado())
  }
}