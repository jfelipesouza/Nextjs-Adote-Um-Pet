import { createGlobalStyle, ThemeProvider } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }


  *::-webkit-scrollbar-thumb {
  background-color: tan;
  border-radius: 20px;

  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
  background: #53514d;
  }

`

const theme = {
  colors: {
    primary: '#ff8b8b',
    secundary:'#ff6347',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
