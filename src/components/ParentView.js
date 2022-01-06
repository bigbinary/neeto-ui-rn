import React, { useContext } from "react";
import { StatusBar } from "react-native";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Container } from "@components";

/**
 *ParentView wraps the childrens with SafeAreaview.
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
  safeAreaViewProps,
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
    <Container flex={1}>
      <Container backgroundColor={statusBarColor}>
        <SafeAreaView {...safeAreaViewProps}>
          <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
        </SafeAreaView>
      </Container>
      <Container flex={1} backgroundColor={newBackgroundColor} {...rest}>
        {children}
      </Container>
    </Container>
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
  safeAreaViewProps: PropTypes.object,
  /**
   * Sets the props for SafeAreaView
   */
};
