import React, { useEffect } from "react";
import { InteractionManager, Keyboard } from "react-native";
import PropTypes from "prop-types";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  typography,
  color,
} from "styled-system";
import styled from "styled-components/native";

import { theme } from "../theme";
import { Container, Typography } from "@components";

const TextInput = styled.TextInput`
  ${flexbox}
  ${space}
  ${border}
  ${buttonStyle}
  ${typography}
  ${color}
`;

const styles = {
  inputStyles: {
    fontSize: 0,
    backgroundColor: "transparent",
    color: "transparent",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  defaultContainerStyles: {
    margin: 2,
    borderRadius: 8,
    backgroundColor: theme.colors.background.white,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 42,
    minWidth: 42,
  },
  defaultTextStyles: {
    fontSize: theme.fontSizes.xl,
    fontFamily: theme.fonts.sf700,
  },
};

/**
 *
 * One-Time password input component.
 *
 * <div class="screenshots">
 *   <img src="screenshots/otp/otp.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Container, OtpInputs, Typography} from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 * const [code, setCode] = useState("");
 * return (
 *   <Container flex={1} justifyContent="center" alignItems="center">
 *      <OtpInputs code={code} numberOfInputs={6} handleChange={setCode} />
 *      <Typography py={10} fontSize="xl">
 *        {`Your entered OTP is ${code}`}
 *      </Typography>
 *    </Container>
 *  );
 * ```
 */

export const OtpInputs = ({
  handleChange = () => {},
  numberOfInputs = 4,
  error = false,
  code = "",
  containerStyles,
  textStyles,
}) => {
  const inputRef = React.useRef();
  useEffect(() => {
    // Must run after animations for keyboard to automatically open
    InteractionManager.runAfterInteractions(() => {
      if (inputRef?.current) {
        inputRef.current.focus();
      }
    });
  }, [inputRef]);

  return (
    <Container>
      <Container
        onTouchStart={() => {
          Keyboard.dismiss();
          inputRef && inputRef.current.focus();
        }}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        {Array(numberOfInputs)
          .fill()
          .map((number, index) => {
            return (
              <Container
                key={index}
                borderColor={
                  code.length - 1 === index
                    ? theme.colors.border.purple500
                    : theme.colors.border.secondary
                }
                borderWidth={code.length - 1 === index ? 1.5 : 1}
                {...styles.defaultContainerStyles}
                {...containerStyles}
              >
                <Typography
                  accessibilityLabel="otp"
                  color={
                    error
                      ? theme.colors.font.danger
                      : theme.colors.font.purple500
                  }
                  {...styles.defaultTextStyles}
                  {...textStyles}
                >
                  {code[index] || ""}
                </Typography>
              </Container>
            );
          })}
        <TextInput
          keyboardType="phone-pad"
          selectionColor="transparent"
          autoFocus={true}
          onChangeText={value => {
            if (!isNaN(value)) {
              if (value.length <= numberOfInputs) {
                handleChange && handleChange(value);
              }
              if (value.length >= numberOfInputs) {
                return Keyboard.dismiss();
              }
            }
          }}
          ref={inputRef}
          value={code || ""}
          {...styles.inputStyles}
        />
      </Container>
    </Container>
  );
};

OtpInputs.defaultProps = {
  containerStyles: {},
  textStyles: {},
};

OtpInputs.propTypes = {
  /**
   * This would be OTP code.
   */
  code: PropTypes.string.isRequired,
  /**
   * Number of Input Fields.
   */
  numberOfInputs: PropTypes.number.isRequired,
  /**
   * Callback called when code is changed.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * If true, code will be shown in red color.
   */
  error: PropTypes.bool,
  /**
   * To change the styles of main container.
   */
  containerStyles: PropTypes.object,
  /**
   * To change the styles of OTP text.
   */
  textStyles: PropTypes.object,
};
