import styled from "styled-components";
import { color, layout, space, flexbox, compose } from "styled-system";

export const Box = styled('div')(
  compose(
    color,
    layout,
    space,
    flexbox
  )
)