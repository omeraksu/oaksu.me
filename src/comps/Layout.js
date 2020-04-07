import React from "react";
import { Box, Navigation } from "./";

export function Layout(props) {
  return (
    <Box maxWidth={1140} m="auto">
      <Navigation />
      {props.children}
    </Box>
  );
}