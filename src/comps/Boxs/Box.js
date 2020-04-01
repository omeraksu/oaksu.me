import styled from "styled-components";
import { color, layout, space, flexbox, compose, border,shadow } from "styled-system";

export const Box = styled('div')(
  compose(
    color,
    layout,
    space,
    flexbox,
    border,
    shadow
  )
)