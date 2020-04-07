import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Layout } from "./comps";

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
