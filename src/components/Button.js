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

/**
 *
 * Buttons are touchable elements used to interact with the screen and to trigger an action.
 *
 * <div class="screenshots">
 *   <img src="screenshots/button/solidButtons.png" />
 *   <img src="screenshots/button/loaderButtons.png" />
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
 *      <Button
 *        my={9}
 *        width={200}
 *        variant="solid"
 *        disabled
 *        label="Solid Button"
 *       />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const Button = React.forwardRef((props, ref) => {
  const {
    RightIcon,
    LeftIcon,
    fontFamily,
    color,
    fontSize,
    loadingText,
    isLoading,
    Loader,
    disabled,
    variant,
    ...rest
  } = props;
  let style = rest.style || {};
  if (disabled || isLoading) {
    style = { ...style, opacity: 0.5 };
  }

  return (
    <TouchableOpacity
      ref={ref}
      flexDirection="row"
      disabled={disabled || isLoading}
      {...rest}
      variant={variant}
      style={style}
    >
      {Loader && isLoading && (
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
});

Button.defaultProps = {
  variant: "solid",
  p: 12,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  loadingText: "Loading…",
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
   * Supported Type: 'text' | 'inverse' | 'solid'
   * You can change the mode to adjust the styling.
   *  <ul>
   *    <li>text - flat button without background or outline.</li>
   *    <li>inverse - button with an outline.</li>
   *    <li>solid - button with a background color.</li>
   *  </ul>
   */
  variant: PropTypes.oneOf(["text", "inverse", "solid"]),
  /**
   * Expects a component.
   */
  RightIcon: PropTypes.elementType,
  /**
   * Expects a component.
   */
  LeftIcon: PropTypes.elementType,
  /**
   * Custom text can be specified while loading if default one needs to changed.
   */
  loadingText: PropTypes.string,
  /**
   * Whether to show a loading indicator.
   */
  isLoading: PropTypes.bool,
  /**
   * Expects a component. Is used to override the default loader.
   */
  Loader: PropTypes.elementType,
};
