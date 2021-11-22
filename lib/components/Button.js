import * as React from "react";
import { flexbox, space, border, buttonStyle } from "styled-system";
import styled from "styled-components/native";

export const TouchableOpacity = styled.TouchableOpacity`
  ${flexbox}
  ${space}
  ${border}
  ${buttonStyle}
`;

export const Button = ({ children, ...rest }) => {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
};

Button.defaultProps = {
  variant: "primary",
  p: 15,
  alignItems: "center",
};
