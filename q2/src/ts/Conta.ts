import State from './State'
import StateDisponivel from './StateDisponivel'
import Agencia from './Agencia'
import Correntista from './Correntista'

export default class Conta {
  protected state: State
  protected saldo: number
  protected limite: number
  protected dataAbertura: Date
  protected dataEncerramento: Date
  protected agencia: Agencia
  protected correntista: Correntista

  constructor(limite: number, agencia: number, nomeAgencia: string, nome: string, cpf: string) {
    this.state = new StateDisponivel()
    this.state.setContext(this)
    this.saldo = 0
    this.limite = limite
    this.dataAbertura = new Date()
    this.agencia = new Agencia(agencia, nomeAgencia)
    this.correntista = new Correntista(nome, cpf)
  }

  public realizarSaque(valor: number): void {
    this.state.realizarSaque(valor)
  }

  public realizarDeposito(valor: number): void {
    this.state.realizarDeposito(valor)
  }

  public fecharConta(): void {
    this.state.fecharConta()
  }

  public mudarState(state: State): void {
    this.state = state
    this.state.setContext(this)
  }

  public getState(): string {
    return this.state.getState()
  }

  public getDataAbertura(): Date {
    return this.dataAbertura
  }

  public getAgencia(): Agencia {
    return this.agencia
  }

  public getCorrentista(): Correntista {
    return this.correntista
  }

  public getSaldo(): number {
    return this.saldo
  }

  public setSaldo(saldo: number): void {
    this.saldo = saldo
  }

  public getLimite(): number {
    return this.limite
  }

  public setLimite(limite: number): void {
    this.limite = limite
  }

  public setDataEncerramento(data: Date): void {
    this.dataEncerramento = data
  }

  public getDataEncerramento(): Date {
    return this.dataEncerramento
  }

}