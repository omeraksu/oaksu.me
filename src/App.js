import React from "react";
import { Header, Box } from "./comps";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
// import { About } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box bg="dark" color="book" width="100vw" height="100vh">
        <Header title="omeraksu" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
