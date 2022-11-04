import Decorator from './Decorator'

export default class SorveteDiet extends Decorator {
  public getPreco(): number {
    return 2 + super.getPreco()
  }
}