import styled from 'styled-components';
import { Row } from '../../styles/global';

export const Container = styled.header `
  background: var(--primary);
`

export const Content = styled(Row) `
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    color: var(--shape);
    background-color: var(--primary-light);
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`
