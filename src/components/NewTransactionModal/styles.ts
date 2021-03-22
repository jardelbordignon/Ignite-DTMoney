import styled from 'styled-components';

export const Container = styled.form `
  h2 {
    color: var(--titles);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.5rem;
    
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    outline: none;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--texts);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--secondary);
    color: var(--shape);

    border-radius: 0.5rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
  }
`

export const TransactionsTypeContainer = styled.div `
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap:0.5rem;
`

interface IRadioType {
  isActive: boolean
}
export const RadioBox = styled.button<IRadioType> `
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.5rem;

  background: ${props => props.isActive ? '#ccc' : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  img { width: 20px; }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--titles);
  }
` 
