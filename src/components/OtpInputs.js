import React from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { theme } from "../theme";
import PropTypes from "prop-types";
import { Container } from "@components";

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

export const OtpInputs = ({
  handleChange = () => {},
  numberOfInputs = 4,
  secureTextEntry = false,
  error = false,
  code = "",
  containerStyle,
}) => {
  const inputRef = React.useRef();

  return (
    <Container style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onLongPress={async () => {}}
        onPress={() => {
          Keyboard.dismiss();
          inputRef && inputRef.current.focus();
        }}
      >
        <Container style={styles.inputsContainer}>
          {Array(numberOfInputs)
            .fill()
            .map((number, index) => {
              return (
                <Text
                  testID="otp"
                  accessibilityLabel="otp"
                  key={index}
                  style={[
                    styles.otpInput,
                    error === true ? { color: theme.colors.font.danger } : {},
                  ]}
                >
                  {code[index] || ""}
                </Text>
              );
            })}
          <TextInput
            keyboardType="phone-pad"
            secureTextEntry={secureTextEntry}
            selectionColor="transparent"
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
            style={styles.emptyViewStyle}
            value={code || ""}
          />
        </Container>
      </TouchableOpacity>
    </Container>
  );
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
   * If true, code will shown as hidden.
   */
  secureTextEntry: PropTypes.bool,
  /**
   * To change the styles main container.
   */
  containerStyle: PropTypes.object,
};

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
  },
  otpInput: {
    color: theme.colors.font.secondary,
    fontSize: theme.fontSizes.xl,
    fontFamily: theme.fonts.inter700,
    textAlign: "center",
    minHeight: 40,
    minWidth: 40,
    textAlignVertical: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background.white,
    borderRadius: 6,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        paddingTop: 5,
      },
      android: {},
    }),
    margin: 5,
    borderColor: theme.colors.background.secondary,
  },
  inputsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyViewStyle: {
    color: "transparent",
    maxWidth: 1,
    maxHeight: 1,
  },
});
