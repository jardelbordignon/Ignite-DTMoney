import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'

import { useTransactions } from '../../hooks/useTransactions'
import closeSvg from '../../assets/close.svg'
import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'

import { Container, TransactionsTypeContainer, RadioBox } from './styles'

interface INewTransactionModal {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModal) {
  const { createTransaction } = useTransactions()

  const initialData = {
    title: '',
    amount: 0,
    category: '',
    type: 'deposit'
  }

  const [transaction, setTransaction] = useState(initialData)

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction(transaction)

    setTransaction(initialData)
    onRequestClose();
  }

  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      
      <button onClick={onRequestClose} className='react-modal-close'>
        <img src={closeSvg} alt="Fechar modal" />
      </button>
      
      <Container onSubmit={ handleCreateNewTransaction }>
        <h2>Cadastrar transação</h2>
        
        <input
          placeholder="Título"
          value={transaction.title}
          onChange={e => setTransaction({...transaction, title: e.target.value})}
        />

        <input
          placeholder="Valor"
          type="number"
          value={transaction.amount}
          onChange={e => setTransaction({...transaction, amount: Number(e.target.value)})}
        />

        <TransactionsTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setTransaction({...transaction, type: 'deposit'})}
            isActive={transaction.type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => setTransaction({...transaction, type: 'withdraw'})}
            isActive={transaction.type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeSvg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionsTypeContainer>

        <input
          placeholder="Categoria"
          value={transaction.category}
          onChange={e => setTransaction({...transaction, category: e.target.value})}  
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
    
  )
}
