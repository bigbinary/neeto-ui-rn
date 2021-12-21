import React, { useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Container } from "@components";

/**
 *ParentView wraps the childrens with SafeAreaview and KeyboardAwareScrollView.
 *
 *  ## Usage
 * ```js
 *import * as React from "react";
 *import { Typography, ParentView } from "@bigbinary/neetoui-rn";
 *
 *export default function Main() {
 *  return (
 *    <ParentView>
 *        <Typography> This is wrapped in ParentView</Typography>
 *    </ParentView>
 *  );
 *}
 *
 * ```
 */

export const ParentView = ({
  barStyle = "light-content",
  children,
  backgroundColor,
  bg,
  ...rest
}) => {
  const theme = useContext(ThemeContext);

  const newBackgroundColor =
    backgroundColor || bg || theme.colors.background.parentView;

  const statusBarColors = {
    default: theme.colors.background.white,
    "dark-content": theme.colors.background.white,
    "light-content": theme.colors.background.base,
  };

  const statusBarColor =
    statusBarColors[barStyle] || statusBarColors["default"];

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: newBackgroundColor }}
    >
      <Container backgroundColor={statusBarColor}>
        <SafeAreaView>
          <StatusBar barStyle={barStyle} />
        </SafeAreaView>
      </Container>
      <Container flex={1} backgroundColor={newBackgroundColor} {...rest}>
        {children}
      </Container>
    </KeyboardAwareScrollView>
  );
};

ParentView.propTypes = {
  /**
   * Sets the color of the status bar text.
   */
  barStyle: PropTypes.string,
  children: PropTypes.node,
  /**
   * Sets the background color
   */
  backgroundColor: PropTypes.string,
  /**
   * Sets the background color
   */
  bg: PropTypes.string,
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
});
