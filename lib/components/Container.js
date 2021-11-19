import { flexbox, space, border, color, layout } from "styled-system";
import styled from "styled-components/native";

export const Container = styled.View`
  ${flexbox}
  ${space}
  ${border}
  ${color}
  ${layout}
`;

Container.defaultProps = {
  color: "background.default",
};
