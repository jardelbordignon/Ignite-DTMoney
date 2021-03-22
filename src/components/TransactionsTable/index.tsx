import { useEffect } from 'react'
import { Container } from './styles'

export function TransactionsTable() {

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

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
          <tr>
            <td>Desevolvimento de website</td>
            <td className='deposit'>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>21/03/2021</td>
          </tr>
          <tr>
            <td>Mercado</td>
            <td className='withdraw'>R$ 500,00</td>
            <td>Alimentação</td>
            <td>21/03/2021</td>
          </tr>
          <tr>
            <td>Financiamento</td>
            <td className='withdraw'>R$ 600,00</td>
            <td>Apartamento</td>
            <td>20/03/2021</td>
          </tr>
          <tr>
            <td>Desevolvimento de website</td>
            <td>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>21/03/2021</td>
          </tr>
         
        </tbody>
      </table>
    </Container>
  )
}
