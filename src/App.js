import React from "react";
import { Header } from "./comps";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Box from "./comps/Box";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box bg="black" color="white" width="100vw" height="100vh">
        <Header title="omeraksu" desc="burası neresi?" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
