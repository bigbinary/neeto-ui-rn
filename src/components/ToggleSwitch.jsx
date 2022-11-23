import React, { useContext, useEffect, useRef } from "react";
import { Animated } from "react-native";

import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";
import { ThemeContext } from "styled-components/native";

import { Container, Touchable } from "@components";

/**
 * ToggleSwitch component is a simple switch toggle component describes what is being switched ON/OFF.
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
 *     />
 *   </Container>
 *  );
 * }
 * ```
 */

export const ToggleSwitch = ({ value, onValueChange, disabled }) => {
  const theme = useContext(ThemeContext);
  const animatedPosition = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    startAnimation();
  }, [value]);

  const startAnimation = () => {
    Animated.timing(animatedPosition, {
      toValue: value ? 20 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const containerBg = value
    ? theme.colors.background.purple500
    : "background.grey300";

  const iconColor = value
    ? theme.colors.background.purple500
    : theme.colors.font.grey500;

  return (
    <Touchable
      bg={containerBg}
      borderRadius={70}
      disabled={disabled}
      height={24}
      justifyContent="center"
      opacity={disabled ? 0.5 : 1}
      px={1}
      width={44}
      onPress={() => onValueChange(!value)}
    >
      <Animated.View style={{ transform: [{ translateX: animatedPosition }] }}>
        <Container
          alignItems="center"
          bg="background.white"
          borderRadius={8}
          height={16}
          justifyContent="center"
          width={16}
        >
          <Icon
            color={iconColor}
            name={`ri-${value ? "check" : "close"}-line`}
            size={12}
          />
        </Container>
      </Animated.View>
    </Touchable>
  );
};

ToggleSwitch.propTypes = {
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