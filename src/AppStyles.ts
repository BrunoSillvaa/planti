import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Container = styled.div`
  background: #ECECEC;
  width: 95vw;
  height: 95vh;
  border-radius: 18px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: grid;
  grid-template-columns: auto 1fr;
  display: flex;

  @media (max-width: 721px) {
    overflow: scroll;
  }
`