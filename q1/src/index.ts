import './css/main.css' // css global
import * as sorvete from './ts/index'

document.querySelector('#submit').addEventListener('click', () => {
  let servido = (<HTMLInputElement> document.querySelector('input[name="servido"]:checked')).value // onde será servido o sorvete
  // let sabores = { // objeto que guarda quantas bolas de cada sabor foram escolhidas
  //   chocolate: 0,
  //   morango: 0,
  //   flocos: 0,
  //   pave: 0,
  //   napolitano: 0,
  //   chocolateDiet: 0
  // }

  // let caldas = {
  //   chocolate: 0,
  //   morango: 0,
  //   caramelo: 0
  // }

  console.log(sorvete)

  let pedido = new sorvete.Sorvete();

  document.querySelectorAll('.saborInput').forEach(_element => { // recupera o numero e sabor das bolas de sorvete
    let element = <HTMLInputElement> _element
    let Sabor: typeof sorvete.Decorator
    switch (element.name) {
      case 'chocolate':
        Sabor = sorvete.SorveteComum
        break

      case 'morango':
        Sabor = sorvete.SorveteComum
        break

      case 'flocos':
        Sabor = sorvete.SorveteComum
        break

      case 'pave':
        Sabor = sorvete.SorveteComum
        break

      case 'napolitano':
        Sabor = sorvete.SorveteComum
        break
      
      case 'chocolateDiet':
        Sabor = sorvete.SorveteDiet
        break
    }

    for (let i = 0; i < parseInt(element.value); i++) {
      pedido = new Sabor(pedido)
    }
  })

  document.querySelectorAll('.caldaInput').forEach(_element => { // recupera o numero e sabor das bolas de sorvete
    let element = <HTMLInputElement> _element
    // caldas[element.name as keyof typeof caldas] = parseInt(element.value)
  })

  alert(pedido.getPreco())

  // console.log(servido, sabores, caldas)
})