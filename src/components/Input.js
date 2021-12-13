import React, { useContext, useState } from "react";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  typography,
  color,
  layout,
} from "styled-system";
import Icon from "react-native-remix-icon";
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

const View = styled.View`
  ${flexbox}
  ${space}
  ${border}
  ${color}
  ${layout}
`;

/**
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 * <ul>
 * <li>flexbox</li>
 * <li>space</li>
 * <li>border</li>
 * <li>buttonStyle</li>
 * <li>brandLeft</li>
 * <li>typography</li>
 * </ul>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Input, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Input brandLeft="example" error={true} message="example error" />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const Input = ({
  label = "",
  message = "",
  error = false,
  onFocus,
  onBlur,
  inline = false,
  brandRight,
  brandLeft,
  brandColor = "font.grey600",
  brandBackground = "background.menubackground",
  disabled = false,
  secureTextEntry = false,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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

  return (
    <Container mb={20}>
      {!inline && <LabelText inline={inline} label={label} />}
      <Container
        {...focusStyles}
        {...disabledStyles}
        flexDirection={inline ? "row" : "column"}
        onBlur={handleBlur}
        onFocus={handleFocus}
        position="relative"
      >
        {inline && (
          <Container alignSelf="flex-end" maxWidth={100} px={2}>
            <LabelText inline={inline} label={label} />
          </Container>
        )}
        <Container flexDirection="row" width="100%">
          {brandLeft && (
            <InputText
              text={brandLeft}
              borderColor={borderColor}
              brandColor={brandColor}
              brandBackground={brandBackground}
            />
          )}
          <TextInput
            height={40}
            flex={1}
            textStyle="subtext"
            {...rest}
            border={!inline && borderColor}
            editable={!disabled}
            color={error ? theme.colors.font.danger : theme.colors.font.primary}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
          />

          {brandRight && (
            <InputText
              text={brandRight}
              borderColor={borderColor}
              brandColor={brandColor}
              brandBackground={brandBackground}
            />
          )}
        </Container>
        {secureTextEntry && (
          <Container
            position="absolute"
            left="90%"
            height="100%"
            justifyContent="center"
          >
            <Icon
              name={isPasswordVisible ? "eye-line" : "eye-off-line"}
              color="background.grey500"
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </Container>
        )}
      </Container>
      {inline && (
        <View
          backgroundColor={theme.colors.border.primary}
          height={1}
          {...inlineInputStyles}
        />
      )}
      <ErrorMessage theme={theme} error={error} message={message} />
    </Container>
  );
};

const InputText = ({ text, borderColor, brandColor, brandBackground }) => (
  <Container
    bg={brandBackground}
    justifyContent="center"
    px={2}
    borderColor={borderColor}
    borderWidth="1px"
  >
    {text && <Typography color={brandColor}>{text}</Typography>}
  </Container>
);

const LabelText = ({ inline, label }) => (
  <Typography
    numberOfLines={1}
    textStyle="subtext"
    mb={inline ? "12px" : "7px"}
  >
    {label}
  </Typography>
);

const ErrorMessage = ({ error, message, theme }) => {
  if (error) {
    return (
      <Typography textStyle="subtext" color={theme.colors.font.danger}>
        {message}
      </Typography>
    );
  }
  return null;
};

Input.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.buttonStyle,
  /**
   * The text to use for the floating label.
   */
  label: PropTypes.string.isRequired,
  /**
   * To display error/info messages
   */
  message: PropTypes.string,
  /**
   * Whether to style the TextInput with error style.
   */
  error: PropTypes.bool,
  /**
   * Changes input layout to inline
   */
  inline: PropTypes.bool,
  /**
   * Display brand to the right of input
   */
  brandRight: PropTypes.string,
  /**
   * Display brand to the left of input
   */
  brandLeft: PropTypes.string,
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled: PropTypes.bool,
  /**
   * To change the color of brand text
   */
  brandColor: PropTypes.string,
  /**
   * To change the color of brand text
   */
  brandBackground: PropTypes.string,
  /**
   * To hide and show password and enable secure text entry
   */
  secureTextEntry: PropTypes.bool,
  children: PropTypes.node,
};

InputText.propTypes = {
  text: PropTypes.string,
  borderColor: PropTypes.string,
  brandColor: PropTypes.string,
  brandBackground: PropTypes.string,
};

LabelText.propTypes = {
  inline: PropTypes.bool,
  label: PropTypes.string,
};

ErrorMessage.propTypes = {
  error: PropTypes.bool,
  message: PropTypes.string,
};

TextInput.defaultProps = {
  height: 40,
  border: 1,
  px: 2,
  fontFamily: "inter400",
  fontSize: "14px",
  borderRadius: 2,
};
