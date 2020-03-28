import React from "react";
import { Text, Nav } from "./";

export function Header(props) { 
  return (
    <Text fontFamily="Sf Pro Rounded" fontSize={18} textAlign="left">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
      <a>{props.title}</a>
      <Nav />
    </Text>
  );
}
