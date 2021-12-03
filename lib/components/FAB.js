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

export const FAB = ({ Icon, bg, disabled, ...rest }) => {
  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  let style = rest.style || {};
  if (disabled) {
    style = { ...style, opacity: 0.5 };
  }
  return (
    <TouchableOpacity
      bg={bg}
      disabled={disabled}
      {...rest}
      style={[style, shadowStyle]}
    >
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
  ...propTypes.elementType,
};
