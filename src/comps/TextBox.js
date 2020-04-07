import styled from "styled-components";
import {
  flexbox,
  color,
  compose,
  typography,
  layout,
  space
} from "styled-system";

export const TextBox = styled("text")(
  compose(color, typography, layout, space, flexbox)
);
