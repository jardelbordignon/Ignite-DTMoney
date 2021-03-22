import Modal from 'react-modal'

import closeSvg from '../../assets/close.svg'
import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'

import { Container, TransactionsTypeContainer } from './styles'

interface INewTransactionModal {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModal) {
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
          <button>
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button>
            <img src={outcomeSvg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionsTypeContainer>

        <input placeholder="Categoria" />
        
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
    
  )
}
