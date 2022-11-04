import Decorator from './Decorator'

export default class SorveteDiet extends Decorator {
  protected tipo: null
  public getPreco(): number {
    return 200 + super.getPreco()
  }

  public getSabores() {
    const saborList = super.getSabores() // recupera a lista de sabores do Sorvete agregado
    saborList.push(this.sabor) // adiciona o próprio sabor
    return saborList // retorna
  }
}