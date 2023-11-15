import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TrasactionsProvider } from "./contexts/TransactionsContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TrasactionsProvider>
        <Transactions />
      </TrasactionsProvider>
    </ThemeProvider>
  )
}

export { App }
