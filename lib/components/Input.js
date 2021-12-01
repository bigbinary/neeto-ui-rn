import React, { useContext, useState } from "react";
import { flexbox, space, border, buttonStyle, typography } from "styled-system";
import styled, { ThemeContext } from "styled-components/native";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";
import { Typography, Container } from "@components";

export const TextInput = styled.TextInput`
  ${flexbox}
  ${space}
  ${border}
  ${buttonStyle}
  ${typography}
`;

export const Input = ({
  label = "",
  message = "",
  error = false,
  onFocus,
  onBlur,
  inline,
  brandRight,
  brandLeft,
  disabled = false,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  const [isFocus, setIsFocus] = useState(false);
  const borderColor = error
    ? theme.colors.border.danger
    : theme.colors.border.primary;

  const handleFocus = e => {
    onFocus && onFocus(e);
    setIsFocus(true);
  };

  const handleBlur = e => {
    onBlur && onBlur(e);
    setIsFocus(false);
  };

  const focusStyles = isFocus && {
    borderRadius: 4,
    borderColor: error
      ? "rgba(255, 105, 105, 0.3)"
      : theme.colors.border.grey400,
    borderWidth: inline ? "0px" : "3px",
    borderStyle: "solid",
  };

  const disabledStyles = disabled && {
    opacity: 0.5,
    bg: theme.colors.background.secondary,
  };

  const inlineInputStyles = isFocus && {
    backgroundColor: error
      ? theme.colors.border.danger
      : theme.colors.border.base,
  };

  const errorMessage = error && (
    <Typography textStyle="subtext" color={theme.colors.font.danger}>
      {message}
    </Typography>
  );

  const labelText = (
    <Typography numberOfLines={1} textStyle="subtext" mb="8px">
      {label}
    </Typography>
  );

  const inputText = text => (
    <Container
      bg={theme.colors.background.menubackground}
      justifyContent="center"
      px={2}
    >
      <Typography>{text}</Typography>
    </Container>
  );

  return (
    <Container mb={20}>
      {!inline && labelText}
      <Container
        {...focusStyles}
        {...disabledStyles}
        flexDirection={inline && "row"}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        {inline && (
          <Container alignSelf="flex-end" maxWidth={100} px={2}>
            {labelText}
          </Container>
        )}
        <Container flexDirection="row" width="100%">
          {brandLeft && inputText(brandLeft)}
          <TextInput
            height={40}
            flex={1}
            textStyle="subtext"
            {...rest}
            border={!inline && borderColor}
            editable={!disabled}
            color={error ? theme.colors.font.danger : theme.colors.font.primary}
          />
          {brandRight && inputText(brandRight)}
        </Container>
      </Container>
      {inline && (
        <Container
          backgroundColor={theme.colors.border.primary}
          height={1}
          {...inlineInputStyles}
        />
      )}
      {errorMessage}
    </Container>
  );
};

Input.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.buttonStyle,
  children: PropTypes.node,
};

TextInput.defaultProps = {
  height: 40,
  border: 1,
  px: 2,
  fontFamily: "inter400",
  fontSize: "14px",
  borderRadius: 2,
};
