import Sorvete from "./InterfaceSorvete"

export default class Decorator implements Sorvete {
  protected sorvete: Sorvete

  constructor(sorvete: Sorvete) {
    this.sorvete = sorvete
  }

  public getPreco(): number {
    return this.sorvete.getPreco()
  }
}