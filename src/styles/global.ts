import styled, { createGlobalStyle } from 'styled-components'

import theme from './theme.json'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: ${theme.colors.primary};
    --primary-light: ${theme.colors.primaryLight};
    --secondary: ${theme.colors.secondary};
    --tertiary: ${theme.colors.tertiary};
    
    --texts: ${theme.colors.texts};
    --titles: ${theme.colors.titles};

    --background: ${theme.colors.background};
    --shape: ${theme.colors.shape};

    --green: #33CC95;
    --red: #E62E4D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: 0;
    outline: none;
    cursor: pointer;

    transition: filter 0.2;
  }
  button:hover {
    filter: brightness(0.9);
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.5rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
  }

`

export const Row = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Column = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
