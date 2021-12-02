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

export const TouchableOpacity = styled.TouchableOpacity`
  ${buttonStyle}
  ${flexbox}
  ${space}
  ${border}
  ${layout}
  ${color}
`;

export const FAB = ({ Icon, ...rest }) => {
  const { disabled } = rest;
  let style = rest.style || {};
  if (rest.disabled) {
    style = { ...style, opacity: 0.5 };
  }
  return (
    <TouchableOpacity disabled={disabled} style={style} {...rest}>
      <Icon />
    </TouchableOpacity>
  );
};

FAB.defaultProps = {
  variant: "solid",
  size: 56,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 28,
};

FAB.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
};
