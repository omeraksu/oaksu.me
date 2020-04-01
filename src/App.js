import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import {Box} from './comps/Boxs'
import Navigation from "./navigation";

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <Box bg="black" height="100vh">
        <Navigation />
      </Box>
    </ThemeProvider>
  );
};

export default App;
