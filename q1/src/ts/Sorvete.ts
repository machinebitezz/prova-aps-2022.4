import InterfaceSorvete from './InterfaceSorvete'
import { Sabores } from './Sabores'
import { Caldas } from './Caldas'
import { Tipos } from './Tipos'

export default class Sorvete implements InterfaceSorvete {

  public getPreco(): number {
    return 0
  }

  public getSabores(): Sabores[] {
    return []
  }

  public getCaldas(): Caldas[] {
    return []
  }

  public getTipo(): Tipos {
    return null
  }

  public setSabor(sabor: Sabores): void {}

  public setCalda(calda: Caldas): void {}

  public setTipo(tipo: Tipos): void {}
}