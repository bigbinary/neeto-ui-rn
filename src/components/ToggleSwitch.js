import React, { useContext } from "react";
import SwitchToggle from "react-native-switch-toggle";
import { ThemeContext } from "styled-components/native";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { Typography, Container } from "@components";

/**
 * ToggleSwitch component is a simple switch toggle component from react-native-switch-toggle along with a label which describes what is being switched ON/OFF.
 *
 * <div class="screenshots">
 *   <img src="screenshots/toggleswitch/switchstyles.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React, {useState} from 'react';
 * import { Typography, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  const [switchOne, setSwitchOne] = useState(true);
 *
 *  return (
 *    <Container>
 *     <ToggleSwitch
 *      value={switchOne}
 *      setValue={() => setSwitchOne(prevValue => !prevValue)}
 *      label="Conversation assigned to my group"
 *     />
 *   </Container>
 *  );
 * }
 * ```
 */

const Label = ({ label, textStyles }) => {
  return (
    <Typography textStyle="subtext" {...textStyles}>
      {label}
    </Typography>
  );
};

export const ToggleSwitch = ({
  value,
  onValueChange,
  label,
  disabled,
  labelPosition,
  ...rest
}) => {
  const theme = useContext(ThemeContext);

  const circleColorOn = disabled
    ? theme.colors.background.grey500
    : theme.colors.background.white;
  const circleColorOff = disabled
    ? theme.colors.background.menubackground
    : theme.colors.background.white;

  return (
    <Container
      flexDirection="row"
      borderColor={theme.colors.border.primary}
      alignItems="center"
      {...rest.wrapperStyles}
    >
      {labelPosition === "left" && (
        <Label label={label} textStyles={rest.textStyles} />
      )}
      <SwitchToggle
        switchOn={value}
        onPress={() => !disabled && onValueChange()}
        circleColorOn={circleColorOn}
        circleColorOff={circleColorOff}
        backgroundColorOff={theme.colors.background.grey200}
        backgroundColorOn={theme.colors.background.grey800}
        containerStyle={styles.containerStyle}
        circleStyle={styles.circleStyle}
        {...rest.switchStyles}
      />
      {labelPosition === "right" && (
        <Label label={label} textStyles={rest.textStyles} />
      )}
    </Container>
  );
};

ToggleSwitch.defaultProps = {
  labelPosition: "left",
  wrapperStyles: {},
  switchStyles: {},
  textStyles: { mr: 2 },
};

ToggleSwitch.propTypes = {
  /**
   * The text to use for the floating label.
   */
  label: PropTypes.string,
  /**
   * Prop that handles the label position.
   */
  labelPosition: PropTypes.string,
  /**
   * Value of the switch, true means 'on', false means 'off'.
   */
  value: PropTypes.bool.isRequired,
  /**
   * Callback called with the new value when it changes.
   */
  onValueChange: PropTypes.func,
  /**
   * Disable toggling the switch.
   */
  disabled: PropTypes.bool,
  /**
   * Prop to handle custom wrapper styles.
   */
  wrapperStyles: PropTypes.object,
  /**
   * Prop to handle custom switch styles.
   */
  switchStyles: PropTypes.object,
  /**
   * Prop to handle custom text styles.
   */
  textStyles: PropTypes.object,
};

Label.propTypes = {
  label: PropTypes.string,
  textStyles: PropTypes.object,
};

const styles = StyleSheet.create({
  containerStyle: {
    width: 38,
    height: 18,
    borderRadius: 10,
    padding: 2,
  },
  circleStyle: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});
