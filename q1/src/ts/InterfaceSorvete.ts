import { Sabores } from './Sabores'
import { Caldas } from './Caldas'
import { Tipos } from './Tipos'

export default interface InterfaceSorvete {
  getPreco(): number
  getSabores(): Sabores[]
  getCaldas(): Caldas[]
  getTipo(): Tipos
  setSabor(sabor: Sabores): void
  setCalda(calda: Caldas): void
  setTipo(tipo: Tipos): void
}