import Modal from 'react-modal'

import closeSvg from '../../assets/close.svg'
import { Container } from './styles'

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
        <input placeholder="Categoria" />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
    
  )
}
