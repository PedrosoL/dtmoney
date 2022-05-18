import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f8f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;

    --input-background: #E7E9EE;
    --radio-box-background: #ccc;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){ 
      font-size: 93.75%;
    }

    @media (max-width: 1080px){ 
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoonthing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong, b {
    font-weight: 600;
  } 

  button, input {
    cursor: pointer;
    border: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    border-radius: 0.25rem;
    padding: 3rem;
    position: relative;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;