import Modal from 'react-modal'

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
      <Container>
        <h2>Cadastrar transação</h2>
        
        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" />
        <button>Cadastrar</button>
      </Container>
    </Modal>
    
  )
}
