import React from "react";
import { Text } from "./";
import { About } from "../pages";

export function Header(props) { 
  return (
    <Text onCompositionEnd={() => console.log("la noli")} fontFamily="Sf Pro Rounded" fontSize={18} textAlign="left">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
      <About />
      <About />
      <About />
    </Text>
  );
}
