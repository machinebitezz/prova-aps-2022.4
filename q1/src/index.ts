import './css/main.css' // css global
import * as sorvete from './ts/index' // módulo sorvete

let numPedido = 1

function addHistorico(pedido: sorvete.Sorvete): void {
  const entry = document.createElement('li') // cria elemento

  const html = `
  Pedido ${numPedido} <br>
  Tipo de sorvete: ${pedido.getTipo()} <br>
  Bolas de sorvete: ${pedido.getSabores().join(', ')} <br>
  Coberturas: ${pedido.getCaldas().join(', ')} <br>
  Valor total: R$${((pedido.getPreco())/100).toFixed(2)} <br>
  ` // gera html interno

  entry.innerHTML = html // atribui o html ao elemento
  document.querySelector('#historico').appendChild(entry) // adiciona à lista
  numPedido++
}

document.querySelector('#submit').addEventListener('click', () => {
  var pedido = new sorvete.Sorvete();

  document.querySelectorAll('.saborInput').forEach(_element => { // recupera a quantidade e sabor das bolas de sorvete
    let element = <HTMLInputElement> _element // Cast de element para HTMLInputElement
    
    let Construtor = sorvete.SorveteComum // escolhe qual classe instanciar dependendo do sabor escolhido
    if (element.name === 'chocolateDiet') {
      Construtor = sorvete.SorveteDiet
    }

    for (let i = 0; i < parseInt(element.value); i++) { // adiciona as n bolas de sorvete desejadas à pilha
      pedido = new Construtor(pedido)
      pedido.setSabor(sorvete.Sabores[element.name as keyof typeof sorvete.Sabores])
    }
  })

  document.querySelectorAll('.caldaInput').forEach(_element => { // recupera a quantidade e sabor das porções de calda adicionais
    let element = <HTMLInputElement> _element
    
    for (let i = 0; i < parseInt(element.value); i++) { // adiciona as n porções de calda desejadas à pilha
      pedido = new sorvete.SorveteComCalda(pedido)
      pedido.setCalda(sorvete.Caldas[element.name as keyof typeof sorvete.Caldas])
    }
  })

  let servido = (<HTMLInputElement> document.querySelector('input[name="servido"]:checked')).value // onde será servido o sorvete
  switch (servido) { // adiciona o tipo escolhido na pilha
    case 'copo':
      pedido = new sorvete.SorveteNoCopo(pedido)
      pedido.setTipo(sorvete.Tipos.copo)
      break

    case 'casq':
      pedido = new sorvete.SorveteNaCasq(pedido)
      pedido.setTipo(sorvete.Tipos.casquinha)
      break

    case 'taca':
      pedido = new sorvete.SorveteNaTaca(pedido)
      pedido.setTipo(sorvete.Tipos.taca)
      break
  }

  addHistorico(pedido) // adiciona o tipo do sorvete à pilha
})