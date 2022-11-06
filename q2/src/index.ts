import './css/main.css'
import * as contaModulo from './ts/index'

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

function atualizarView(): void {
  document.querySelector('#estado').innerHTML = conta.getState()
  document.querySelector('#saldo').innerHTML = (conta.getSaldo()/100).toFixed(2).toString()
  document.querySelector('#limite').innerHTML = (conta.getLimite()/100).toFixed(2).toString()
  document.querySelector('#data-aber').innerHTML = `${conta.getDataAbertura().getDate()}/${conta.getDataAbertura().getMonth()+1}/${conta.getDataAbertura().getUTCFullYear()}`
  if (conta.getState() === 'Fechada') {
    document.querySelector('#data-enc').innerHTML = `${conta.getDataEncerramento().getDate()}/${conta.getDataEncerramento().getMonth()+1}/${conta.getDataEncerramento().getUTCFullYear()}`
  }
}

const conta = new contaModulo.Conta(15000)
atualizarView()

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