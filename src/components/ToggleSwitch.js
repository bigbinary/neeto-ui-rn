import React, { useContext } from "react";
import SwitchToggle from "react-native-switch-toggle";
import { ThemeContext } from "styled-components/native";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { Typography, Container } from "@components";

/**
 * ToggleSwitch component is a simple switch toggle component from react-native-switch-toggle along with a label which describes what is being switched ON/OFF.
 *
 * This component supports below props categories from [styled-system ](/styled-system).
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
 *
 * @extends StyledSystems props /styled-system
 */

export const ToggleSwitch = ({
  value,
  onValueChange,
  label,
  disabled,
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
      {...rest}
    >
      <Typography flex={0.8} textStyle="subtext">
        {label}
      </Typography>
      <Container flex={0.2} alignItems="flex-end">
        <SwitchToggle
          switchOn={value}
          onPress={() => !disabled && onValueChange()}
          circleColorOn={circleColorOn}
          circleColorOff={circleColorOff}
          backgroundColorOff={theme.colors.background.grey200}
          backgroundColor={theme.colors.background.grey800}
          containerStyle={styles.containerStyle}
          circleStyle={styles.circleStyle}
          {...rest}
        />
      </Container>
    </Container>
  );
};

ToggleSwitch.defaultProps = {
  borderWidth: 1,
  borderRadius: 2,
  p: 3,
};

ToggleSwitch.propTypes = {
  /**
   * The text to use for the floating label.
   */
  label: PropTypes.string.isRequired,
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
