import { useTransactions } from '../../hooks/useTransactions'
import { currencyFormat } from '../../utils/currencyFormat'
import { Container } from './styles'

export function TransactionsTable() {
  const { transactions } = useTransactions()
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          { 
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  { currencyFormat(transaction.amount) }
                </td>
                <td>{transaction.category}</td>
                <td>
                  { 
                    new Intl.DateTimeFormat('pt-BR')
                      .format(new Date(transaction.created_at))
                  }
                </td>
              </tr>
            ))
          }
                   
        </tbody>
      </table>
    </Container>
  )
}
