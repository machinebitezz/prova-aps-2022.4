import InterfaceSorvete from './InterfaceSorvete'
import Sorvete from './Sorvete'
import { Sabores } from './Sabores'
import { Caldas } from './Caldas'
import { Tipos } from './Tipos'

export default class Decorator implements InterfaceSorvete {
  protected sorvete: Sorvete
  protected sabor: Sabores
  protected calda: Caldas
  protected tipo: Tipos

  constructor(sorvete: Sorvete) {
    this.sorvete = sorvete
  }

  public setSabor(sabor: Sabores) {
    this.sabor = sabor
  }

  public setCalda(calda: Caldas) {
    this.calda = calda
  }

  public setTipo(tipo: Tipos) {
    this.tipo = tipo
  }

  public getPreco(): number {
    return this.sorvete.getPreco()
  }

  public getSabores(): Sabores[] {
    return this.sorvete.getSabores()
  }

  public getCaldas(): Caldas[] {
    return this.sorvete.getCaldas()
  }

  public getTipo(): Tipos { // apenas o objeto no topo da pilha pode retornar o tipo
    return this.tipo
  }
}