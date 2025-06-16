import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --gradient-primary: linear-gradient(135deg, #FFE5D3 0%, #A18CD1 100%);
    --gradient-button: linear-gradient(135deg, #3D5CFF 0%, #6C63FF 100%);
    --color-primary: #3D5CFF;
    --color-text-primary: #1B1D21;
    --color-text-secondary: #6B7280;
    --max-width: 1440px;
    --container-padding: 0 2rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-text-primary);
    overflow-x: hidden;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--container-padding);
    width: 100%;
  }
`;

export default GlobalStyles; 