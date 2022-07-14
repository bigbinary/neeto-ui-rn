import React, { useContext } from "react";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components/native";

import { Typography, Touchable } from "@components";

/**
 *
 * Buttons are touchable elements used to interact with the screen and to trigger an action.
 *
 * <div class="screenshots">
 *   <img src="screenshots/button/button.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *      <Button my={9} label="Button1" />
 *      <Button my={9} disabled label="Disabled Button2" />
 *      <Button
 *        my={9}
 *        LeftIcon={() => <Icon name="ri-add-line" color="white" size={16} />}
 *        label="Left Icon Button"
 *      />
 *      <Button
 *        my={9}
 *        RightIcon={() => <Icon name="ri-add-line" color="white" size={16} />}
 *        label="Right Icon Button"
 *      />
 *      <Button my={9} variant="text" label="Text Button" />
 *      <Button
 *        my={9}
 *        variant="text"
 *        LeftIcon={() => (
 *          <Icon name="ri-add-line" color={theme.fonts.primary} size={16} />
 *        )}
 *        label="Left Icon Text Button"
 *      />
 *      <Button
 *        my={9}
 *        variant="text"
 *        RightIcon={() => (
 *          <Icon name="ri-add-line" color={theme.fonts.primary} size={16} />
 *        )}
 *        label="Right Icon Text Button"
 *      />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const Button = props => {
  const { variant, label, labelStyle, RightIcon, LeftIcon, disabled, ...rest } =
    props;
  const theme = useContext(ThemeContext);
  const isTextVariant = variant === "text";

  return (
    <Touchable
      rippleColor={isTextVariant ? "black" : "white"}
      disabled={disabled}
      bg={
        isTextVariant
          ? "transparent"
          : theme.colors.background[disabled ? "grey400" : "base"]
      }
      height={45}
      width={isTextVariant ? null : "100%"}
      borderRadius={8}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      {LeftIcon && <LeftIcon />}
      <Typography
        textAlign="center"
        mx={2}
        color={theme.colors.font[isTextVariant ? "primary" : "white"]}
        fontSize="m"
        fontFamily={theme.fonts.SFProText500}
        {...labelStyle}
      >
        {label}
      </Typography>
      {RightIcon && <RightIcon />}
    </Touchable>
  );
};

Button.defaultProps = {
  variant: "solid",
};

Button.propTypes = {
  ...propTypes.buttonStyle,
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
  /**
   * Takes the text that needs to be displayed inside the button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Supported Type: 'text' | 'solid'
   * You can change the mode to adjust the styling.
   *  <ul>
   *    <li>text - flat button without background or outline.</li>
   *    <li>solid - button with a background color.</li>
   *  </ul>
   */
  variant: PropTypes.oneOf(["text", "solid"]),
  /**
   * Enable or Disable the button.
   */
  disabled: PropTypes.bool,
  /**
   * Customize label style of the button.
   */
  labelStyle: PropTypes.object,
  /**
   * Render a component on the right side of the Label.
   */
  RightIcon: PropTypes.elementType,
  /**
   * Render a component on the left side of the Label.
   */
  LeftIcon: PropTypes.elementType,
};
