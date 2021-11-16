import { flexbox, space, border, buttonStyle } from "styled-system";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  ${flexbox}
  ${space}
  ${border}
  ${buttonStyle}
`;

Button.defaultProps = {
  variant: "primary",
  p: 15,
  alignItems: "center",
};
