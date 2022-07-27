import React, { useContext } from "react";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components/native";
import { ActivityIndicator } from "react-native";

import AppleLogo from "@assets/icons/apple-logo.svg";
import GoogleLogo from "@assets/icons/google-logo.svg";
import { Container, Typography, Touchable } from "@components";

/**
 *
 * Buttons are touchable elements used to interact with the screen and to trigger an action.
 *
 * <div class="screenshots">
 *   <img src="screenshots/button/socialButtons.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Container, SocialButton } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *      <SocialButton variant="apple" my={9} />
 *      <SocialButton variant="google" />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const SocialButton = props => {
  const { variant, disabled, labelStyle, isLoading, ...rest } = props;
  const theme = useContext(ThemeContext);
  const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

  return (
    <Touchable
      rippleColor={theme.colors.background.grey800}
      disabled={disabled}
      bg="transparent"
      height={48}
      width="100%"
      borderRadius={8}
      borderWidth={1}
      borderColor={theme.colors.background.grey800}
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.background.grey800} />
      ) : (
        <>
          <Container position="absolute" left={17}>
            {variant === "apple" && <AppleLogo />}
            {variant === "google" && <GoogleLogo />}
          </Container>
          <Typography
            color={theme.colors.font.primary}
            fontSize="m"
            fontFamily={theme.fonts.sf500}
            {...labelStyle}
          >
            Continue with {capitalize(variant)}
          </Typography>
        </>
      )}
    </Touchable>
  );
};

SocialButton.propTypes = {
  ...propTypes.buttonStyle,
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
  /**
   * Supported Type: 'apple' | 'google'
   */
  variant: PropTypes.oneOf(["apple", "google"]),
  /**
   * Enable or Disable the button
   */
  disabled: PropTypes.bool,
  /**
   * Customize label style of the button
   */
  labelStyle: PropTypes.object,
};
