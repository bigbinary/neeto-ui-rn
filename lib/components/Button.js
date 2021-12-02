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
import { Typography, Container } from "@components";
import PropTypes from "prop-types";

export const TouchableOpacity = styled.TouchableOpacity`
  ${buttonStyle}
  ${flexbox}
  ${space}
  ${border}
  ${layout}
  ${color}
`;

export const Button = ({
  RightIcon,
  LeftIcon,
  fontFamily,
  color,
  fontSize,
  loadingText = "Loading...",
  isLoading,
  Loader,
  ...rest
}) => {
  const { disabled, variant } = rest;
  let style = rest.style || {};
  if (disabled || isLoading) {
    style = { ...style, opacity: 0.5 };
  }

  return (
    <TouchableOpacity
      flexDirection="row"
      disabled={disabled || isLoading}
      {...rest}
      style={style}
    >
      {Loader && (
        <Container mx={1}>
          <Loader />
        </Container>
      )}
      {LeftIcon && <LeftIcon />}
      <Typography
        textAlign="center"
        mx={1}
        color={color}
        fontFamily={fontFamily || "inter700"}
        fontSize={fontSize || "s"}
        textStyle={variant}
      >
        {isLoading ? loadingText : rest.label}
      </Typography>
      {RightIcon && <RightIcon />}
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
  RightIcon: PropTypes.node,
  LeftIcon: PropTypes.node,
  loadingText: PropTypes.string,
  isLoading: PropTypes.boolean,
  Loader: PropTypes.node,
  label: PropTypes.string.isRequired,
};
