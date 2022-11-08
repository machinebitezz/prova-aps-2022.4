import './css/main.css'
import * as ecomm from './ts/index'

function atualizarView() {
  let viewProdutos = ''

  for (let i = 0; i < produtos.length; i++) {
    viewProdutos += `
      <div class="produto">
        Nome: ${produtos[i].nome} <br>
        Preço: R$${produtos[i].valor} <br>
        <input type="button" value="Adicionar no Carrinho" class="adicionar-produto" data-index="${i}"> <br>
      </div>
    `
  }
  document.querySelector('#produtos>div').innerHTML = viewProdutos
  document.querySelectorAll('.adicionar-produto').forEach(element => {
    element.addEventListener('click', event => {
      const index = parseInt((<HTMLElement> event.target).dataset.index)
      pedido.adicionarProduto(produtos[index])
      atualizarView()
    })
  })

  let viewCarrinho = ''
  for (let i = 0; i < pedido.getCarrinho().length; i++) {
    viewCarrinho += `
      <div class="produto">
        Nome: ${pedido.getCarrinho()[i].nome} <br>
        Preço: R$${pedido.getCarrinho()[i].valor} <br>
        <input type="button" value="Remover do Carrinho" class="carrinho-produto" data-index="${i}"> <br>
      </div>
    `
  }
  document.querySelector('#carrinho>div:not(#total)').innerHTML = viewCarrinho
  document.querySelectorAll('.carrinho-produto').forEach(element => {
    element.addEventListener('click', event => {
      const index = parseInt((<HTMLElement> event.target).dataset.index)
      pedido.removerProduto(index)
      atualizarView()
    })
  })
  document.querySelector('#preco').innerHTML = pedido.getCarrinho().reduce((acc, produto) => acc + produto.valor, 0).toString()

  document.querySelector('#estado').innerHTML = pedido.getState()
}

const produtos = [
  new ecomm.Produto('Produto 1', 13),
  new ecomm.Produto('Produto 2', 53),
  new ecomm.Produto('Produto 3', 34),
  new ecomm.Produto('Produto 4', 75),
  new ecomm.Produto('Produto 5', 19),
  new ecomm.Produto('Produto 6', 122)
]

const pedido = new ecomm.Pedido();

(<HTMLInputElement> document.querySelector('#alterar')).addEventListener('click', () => {
  pedido.alterarPedido()
  atualizarView()
});

(<HTMLInputElement> document.querySelector('#fechar')).addEventListener('click', () => {
  pedido.fecharPedido()
  atualizarView()
});

(<HTMLInputElement> document.querySelector('#enviar')).addEventListener('click', () => {
  pedido.enviarPedido()
  atualizarView()
});

(<HTMLInputElement> document.querySelector('#cancelar')).addEventListener('click', () => {
  pedido.cancelarPedido()
  atualizarView()
});

(<HTMLInputElement> document.querySelector('#pagar')).addEventListener('click', () => {
  pedido.pagar()
  atualizarView()
});

(<HTMLInputElement> document.querySelector('#perder')).addEventListener('click', () => {
  pedido.pedidoPerdido()
  atualizarView()
});

(<HTMLInputElement> document.querySelector('#finalizar')).addEventListener('click', () => {
  pedido.finalizarPedido()
  atualizarView()
});

(<HTMLInputElement> document.querySelector('#reembolsar')).addEventListener('click', () => {
  pedido.realizarReembolso()
  atualizarView()
});

(<HTMLInputElement> document.querySelector('#devolver')).addEventListener('click', () => {
  pedido.devolverPedido()
  atualizarView()
})

atualizarView()