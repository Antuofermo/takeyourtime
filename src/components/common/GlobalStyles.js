import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Lucida, sans-serif; 
    width: 100vw; 
    background: var(--body-background);
  }

  :root {
    --color-dark: #282828;
    --color-gold: goldenrod;
    --body-background: #f5f5f5;
    --color-black: black;
    --color-white: white;
  }

`
