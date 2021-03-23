import { useContext } from 'react'

import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import totalSvg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { currencyFormat } from '../../utils/currencyFormat';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext( TransactionsContext )

  const summary = {
    deposits: 0,
    withdraws: 0,
    total: 0
  }

  transactions.forEach(transaction => {
    const type = transaction.type === 'deposit' ? 'deposits' : 'withdraws'
    summary[type] += transaction.amount
  });
  
  summary.total = summary.deposits - summary.withdraws
  

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>{ currencyFormat(summary.deposits) }</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong>-{ currencyFormat(summary.withdraws) }</strong>
      </div>
      <div className='total-summary'>
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong>{ currencyFormat(summary.total) }</strong>
      </div>
    </Container>
  )
}
