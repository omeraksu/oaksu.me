import React from "react";
import { Logo } from "./icons";
import { Box, TextBox } from "./";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <Router>
        <Box flex="2">
          <Link to="/">
            <Logo />
          </Link>
        </Box>
        <TextBox display="flex" flex="1" justifyContent="space-around">
          <Link to="/about">
            about
          </Link>
          <Link to="/works">
            works
          </Link>
          <Link to="/contact">
            contact
          </Link>
        </TextBox>
      </Router>
    </Box>
  );
}