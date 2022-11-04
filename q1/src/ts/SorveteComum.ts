import Decorator from './Decorator'

export default class SorveteComum extends Decorator {
  public getPreco() {
    return 150 + super.getPreco()
  }

  public getSabores() {
    const saborList = super.getSabores() // recupera a lista de sabores do Sorvete agregado
    saborList.push(this.sabor) // adiciona o próprio sabor
    return saborList // retorna
  }
}