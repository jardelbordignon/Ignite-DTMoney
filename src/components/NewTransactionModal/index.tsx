import { useState } from 'react'
import Modal from 'react-modal'

import closeSvg from '../../assets/close.svg'
import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'

import { Container, TransactionsTypeContainer, RadioBox } from './styles'

interface INewTransactionModal {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModal) {
  const [type, setType] = useState('deposit')

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
      
      <Container>
        <h2>Cadastrar transação</h2>
        
        <input placeholder="Título" />

        <input placeholder="Valor" type="number" />

        <TransactionsTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
          >
            <img src={outcomeSvg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionsTypeContainer>

        <input placeholder="Categoria" />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
    
  )
}
