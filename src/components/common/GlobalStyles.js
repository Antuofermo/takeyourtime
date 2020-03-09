import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100vh;
    font-family: Lucida, sans-serif; 
    display: grid;
    grid-template-rows: 48px auto;
    height: 100vh;
    margin: 0 auto;
    
  }
`
