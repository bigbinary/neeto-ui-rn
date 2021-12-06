import React, { useContext } from "react";
import SwitchToggle from "react-native-switch-toggle";
import { ThemeContext } from "styled-components/native";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { Typography, Container } from "@components";

export const ToggleSwitch = ({ value, setValue, label, disabled, ...rest }) => {
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
          onPress={() => !disabled && setValue()}
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
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func,
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
