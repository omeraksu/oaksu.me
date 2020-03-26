import React from "react";
import { Header, Nav } from "./comps";
import {ThemeProvider} from 'styled-components'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header title="omeraksu" desc="burası neresi?" />
      <Nav title="studio" />
    </ThemeProvider>
  );
}

export default App;
