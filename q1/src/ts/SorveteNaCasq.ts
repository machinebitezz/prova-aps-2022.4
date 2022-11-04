import Decorator from './Decorator'

export default class SorveteNaCasq extends Decorator {
  public getPreco(): number {
    return 150 + super.getPreco()
  }
}