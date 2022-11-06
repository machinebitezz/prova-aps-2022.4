import Conta from "./Conta"

export default abstract class State {
  protected conta: Conta
  protected nomeState = ''

  public setContext(context: Conta): void {
    this.conta = context
  }

  public getState(): string {
    return this.nomeState
  }

  public abstract realizarSaque(valor: number): void
  public abstract realizarDeposito(valor: number): void
  public abstract fecharConta(): void
}