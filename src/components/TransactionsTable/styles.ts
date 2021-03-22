import styled from 'styled-components';

export const Container = styled.div `
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--texts);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      background-color: var(--shape);
      padding: 1rem 2rem;
      border: 0;
      color: var(--texts);
      border-radius: 0.5rem;

      &:first-child {
        color: var(--titles);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`
