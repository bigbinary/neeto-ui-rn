import * as React from "react";
import { flexbox, space, border, buttonStyle } from "styled-system";
import styled from "styled-components/native";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";

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

Button.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.buttonStyle,
  children: PropTypes.node.isRequired,
};
