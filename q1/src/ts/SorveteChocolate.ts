import Decorator from './Decorator'

export default class SorveteComum extends Decorator {
  public adicionar(): number {
    return 1.5 + super.getPreco()
  }
}