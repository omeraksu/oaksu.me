import React from "react";
import { Box } from "./comps";
import { About } from "./pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Navigation() {
  return (
      <Router>
    <Box>
      <Switch>
        <Route path="/" component={About} />
        <Route path="*" />
      </Switch>
    </Box>
    </Router>
  );
}

export default Navigation;
