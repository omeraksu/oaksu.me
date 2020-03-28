import styled from "styled-components";
import { typography, color, layout, space, flexbox, compose } from "styled-system";

export const Text = styled('div')(
  compose(
    typography,
    color,
    layout,
    space,
    flexbox
  )
)