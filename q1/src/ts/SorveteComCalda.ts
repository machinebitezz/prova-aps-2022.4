import { Caldas } from './Caldas'
import Decorator from './Decorator'

export default class SorveteComCalda extends Decorator {
  public getPreco(): number {
    return 50 + super.getPreco()
  }

  public getCaldas(): Caldas[] { 
    const caldaList = super.getCaldas() // recupera a lista de caldas do Sorvete agregado
    caldaList.push(this.calda) // adiciona a calda dele mesmo
    return caldaList // retorna
  }
}