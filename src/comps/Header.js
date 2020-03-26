import React from "react";
import { Box, Nav } from "./";
import styled from "styled-components";

export function Header({ title }) {
  const Navicigim = styled(Box)({
    borderRadius: "4",
    border: "1px solid #f6f6f6",
    boxShadow: "0 2px 4px rgba(0, 0, 0, .125)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  });
  return (
    <Navicigim>
      <a>{title}</a>
      <Nav />
    </Navicigim>
  );
}
