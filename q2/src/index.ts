import './css/main.css'
import * as contaModulo from './ts/index'

let conta: contaModulo.Conta

function checkValor(valor: String): boolean {
  const strings = valor.split('.')

  if (strings.length === 1) {
    return true
  }

  if (strings[1].length > 2) {
    alert('Muitas casas decimais após a virgula')
    return false
  }

  return true
}

function atualizarView(): void { // atualiza a visualização
  document.querySelector('#estado').innerHTML = conta.getState()
  document.querySelector('#saldo').innerHTML = (conta.getSaldo()/100).toFixed(2).toString()
  document.querySelector('#limite').innerHTML = (conta.getLimite()/100).toFixed(2).toString()
  document.querySelector('#data-aber').innerHTML = `${conta.getDataAbertura().getDate()}/${conta.getDataAbertura().getMonth()+1}/${conta.getDataAbertura().getUTCFullYear()}`
  if (conta.getState() === 'Fechada') {
    document.querySelector('#data-enc').innerHTML = `${conta.getDataEncerramento().getDate()}/${conta.getDataEncerramento().getMonth()+1}/${conta.getDataEncerramento().getUTCFullYear()}`
  }
  document.querySelector('#nome-agencia').innerHTML = conta.getAgencia().getNome()
  document.querySelector('#numero-agencia').innerHTML = conta.getAgencia().getNumero().toString()
  document.querySelector('#nome-correntista').innerHTML = conta.getCorrentista().getNome()
  document.querySelector('#cpf-correntista').innerHTML = conta.getCorrentista().getCpf()

}

(<HTMLElement> document.querySelector('.container')).style.display = 'None'; // esconde a interface da conta antes dela ser 'aberta'
(<HTMLInputElement> document.querySelector('#criar')).addEventListener('click', () => { // cria a conta
  const numAgencia = Math.round(Math.random() * 1000)
  const nomeAgencia = (<HTMLInputElement> document.querySelector('#nome-ag')).value
  const nome = (<HTMLInputElement> document.querySelector('#nome')).value
  const cpf = (<HTMLInputElement> document.querySelector('#cpf')).value

  if (cpf.length !== 9) {
    alert('CPF Inválido')
    return
  }

  if (nomeAgencia.length === 0) {
    alert('Nome da agencia inválido')
    return
  }

  if (nome.length === 0) {
    alert('Nome inválido')
    return
  }

  conta = new contaModulo.Conta(15000, numAgencia, nomeAgencia, nome, cpf);
  (<HTMLElement> document.querySelector('.container')).style.display = 'block';
  (<HTMLElement> document.querySelector('.init')).style.display = 'None';
  atualizarView()
})

document.querySelector('#deposito').addEventListener('click', () => {
  let valor: string | number = (<HTMLInputElement> document.querySelector('#valor')).value
  
  if (!checkValor(valor)) {
    return
  }

  valor = parseFloat(valor) * 100
  conta.realizarDeposito(valor)
  atualizarView()
})

document.querySelector('#saque').addEventListener('click', () => {
  let valor: string | number = (<HTMLInputElement> document.querySelector('#valor')).value
  
  if (!checkValor(valor)) {
    return
  }

  valor = parseFloat(valor) * 100
  conta.realizarSaque(valor)
  atualizarView()
})

document.querySelector('#fechar').addEventListener('click', () => {
  conta.fecharConta()
  atualizarView()
})