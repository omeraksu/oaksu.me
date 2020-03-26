import React from "react";
import Box from "./Box";

export function Header({ title, desc }) {
  return (
    <Box color="white" bg="navy">
      <div>{title}</div>
      <li>{desc}</li>
    </Box>
  );
}
