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

export const Button = ({ RightIcon, LeftIcon, ...rest }) => {
  const { disabled } = rest;
  let style = rest.style || {};
  if (disabled) {
    style = { ...style, opacity: 0.5 };
  }
  return (
    <TouchableOpacity
      flexDirection="row"
      disabled={disabled}
      {...rest}
      style={style}
    >
      {RightIcon && <RightIcon />}
      <Typography
        textAlign="center"
        fontSize="s"
        fontFamily="inter700"
        mx={1}
        textStyle={rest.variant}
      >
        {rest.label}
      </Typography>
      {LeftIcon && <LeftIcon />}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  variant: "solid",
  p: 12,
  alignItems: "center",
  justifyContent: "center",
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
