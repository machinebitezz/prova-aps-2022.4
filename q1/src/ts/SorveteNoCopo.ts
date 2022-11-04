import Decorator from './Decorator'

export default class SorveteNoCopo extends Decorator {
  public getPreco(): number {
    return 20 + super.getPreco()
  }
}