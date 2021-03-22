import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import closeSvg from '../../assets/close.svg'
import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'
import api from '../../services/api'

import { Container, TransactionsTypeContainer, RadioBox } from './styles'

interface INewTransactionModal {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModal) {
  const [transaction, setTransaction] = useState({
    title: '',
    value: 0,
    category: '',
    type: 'deposit'
  })
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    //console.log(transaction)
    api.post('/transactions', transaction)
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
          value={transaction.value}
          onChange={e => setTransaction({...transaction, value: Number(e.target.value)})}
        />

        <TransactionsTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
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
