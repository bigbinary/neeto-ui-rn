import React, { useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Container } from "@components";

export const ParentView = ({
  barStyle = "light-content",
  children,
  ...rest
}) => {
  const theme = useContext(ThemeContext);

  const statusBarColors = {
    default: theme.colors.background.white,
    "dark-content": theme.colors.background.white,
    "light-content": theme.colors.background.base,
  };

  const statusBarColor =
    statusBarColors[barStyle] || statusBarColors["default"];

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: statusBarColor }}
    >
      <Container backgroundColor={statusBarColor}>
        <SafeAreaView>
          <StatusBar barStyle={barStyle} />
        </SafeAreaView>
      </Container>
      <Container flex={1} {...rest}>
        {children}
      </Container>
    </KeyboardAwareScrollView>
  );
};

ParentView.propTypes = {
  barStyle: PropTypes.string,
  children: PropTypes.string,
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
});
