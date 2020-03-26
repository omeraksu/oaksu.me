import React from "react";
import { Header, Box } from "./comps";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

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
