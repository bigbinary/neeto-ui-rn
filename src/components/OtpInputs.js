import React, { useEffect } from "react";
import { InteractionManager, Keyboard } from "react-native";
import PropTypes from "prop-types";

import { theme } from "../theme";
import { Container, Touchable, Typography, Input } from "@components";

/**
 *
 * One-Time password input component.
 *
 * <div class="screenshots">
 *   <img src="screenshots/otpInputs/otpInputs.png" />
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
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.background.secondary,
    backgroundColor: theme.colors.background.white,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 45,
    minWidth: 45,
  },
  defaultTextStyles: {
    fontSize: theme.fontSizes.xl,
    fontFamily: theme.fonts.sf700,
  },
};

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
      <Touchable
        onPress={() => {
          Keyboard.dismiss();
          inputRef && inputRef.current.focus();
        }}
      >
        <Container
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
                  {...styles.defaultContainerStyles}
                  {...containerStyles}
                >
                  <Typography
                    accessibilityLabel="otp"
                    color={
                      error
                        ? theme.colors.font.danger
                        : theme.colors.font.secondary
                    }
                    {...styles.defaultTextStyles}
                    {...textStyles}
                  >
                    {code[index] || ""}
                  </Typography>
                </Container>
              );
            })}
          <Input
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
      </Touchable>
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
