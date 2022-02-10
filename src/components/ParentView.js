import React, { useContext } from "react";
import { StatusBar } from "react-native";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

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
  topInset = true,
  rightInset = true,
  leftInset = true,
  bottomInset = true,
  ...rest
}) => {
  const theme = useContext(ThemeContext);

  const safeAreaViewProps = {
    edges: [topInset && "top", rightInset && "right", leftInset && "left"],
  };

  const newBackgroundColor =
    backgroundColor || bg || theme.colors.background.parentView;

  const statusBarColors = {
    default: theme.colors.background.white,
    "dark-content": theme.colors.background.white,
    "light-content": theme.colors.background.base,
  };

  const statusBarColor =
    statusBarColors[barStyle] || statusBarColors["default"];

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      flex={1}
      {...safeAreaViewProps}
      style={{ backgroundColor: statusBarColor }}
    >
      <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
      <Container
        flex={1}
        backgroundColor={newBackgroundColor}
        {...rest}
        {...(bottomInset && { pb: insets.bottom })}
      >
        {children}
      </Container>
    </SafeAreaView>
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
  /**
   * Sets Top Inset
   */
  topInset: PropTypes.bool,
  /**
   * Sets Right Inset
   */
  rightInset: PropTypes.bool,
  /**
   * Sets Left Inset
   */
  leftInset: PropTypes.bool,
  /**
   * Sets Bottom Inset
   */
  bottomInset: PropTypes.bool,
};
