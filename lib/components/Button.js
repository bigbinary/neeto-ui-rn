import * as React from "react";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  color,
  layout,
} from "styled-system";
import styled from "styled-components/native";
import propTypes from "@styled-system/prop-types";
import { Typography } from "@components";

export const TouchableOpacity = styled.TouchableOpacity`
  ${buttonStyle}
  ${flexbox}
  ${space}
  ${border}
  ${layout}
  ${color}
`;

export const Button = ({ ...rest }) => {
  const { disabled } = rest;
  let style = rest.style || {};
  if (disabled) {
    style = { ...style, opacity: 0.5 };
  }
  return (
    <TouchableOpacity disabled={disabled} {...rest} style={style}>
      <Typography textStyle={rest.variant}>{rest.label}</Typography>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  variant: "solid",
  p: 12,
  alignItems: "center",
  borderRadius: 2,
};

Button.propTypes = {
  ...propTypes.buttonStyle,
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
};
