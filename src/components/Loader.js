/* eslint-disable @bigbinary/neeto/no-dangling-constants */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  withRepeat,
  Easing,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components/native";
import { Container } from "@components";

const LOADER_WIDTH = {
  s: 24,
  m: 36,
  l: 48,
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

/**
 ** Component is used to show a loading indication to user.
 *
 * <div class="screenshots">
 *   <img src="screenshots/loader/loader.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Container, Loader } from '@bigbinary/neetoui-rn';
 * export default function Main() {
 *  return (
 *    <Container>
 *      <Loader size='l'/>
 *    </Container>
 *  )
 * }
 * ```
 *
 */

export const Loader = ({ colorVariant, size }) => {
  const progress = useSharedValue(0);
  const width = LOADER_WIDTH[size];
  const stroke_width = width * 0.15;
  const radius = (width - stroke_width) / 2;
  const svgWidth = width;
  const circleLength = (width / 2) * (2 * Math.PI);
  const theme = useContext(ThemeContext);
  const LOADER_COLOR = {
    primary: "#4558F9",
    secondary: theme.colors.font.white,
  };
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(2, {
        duration: 1500,
        easing: Easing.out(Easing.in),
      }),
      -1,
      false
    );
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circleLength * (1 - progress.value),
  }));

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 2], [0, 360]);
    return {
      width: width,
      height: width,
      alignItems: "center",
      justifyContent: "center",
      transform: [{ rotate: scale + "deg" }],
    };
  });

  return (
    <Container
      flex={1}
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
    >
      <Animated.View style={animatedStyles}>
        <Svg width={width} height={width}>
          <AnimatedCircle
            cx={svgWidth / 2}
            cy={svgWidth / 2}
            r={radius}
            strokeWidth={stroke_width}
            stroke={LOADER_COLOR[colorVariant]}
            strokeDasharray={circleLength}
            animatedProps={animatedProps}
            strokeLinecap="round"
          />
        </Svg>
      </Animated.View>
    </Container>
  );
};

Loader.propTypes = {
  /**
   * Size variant to select the width of the loader.
   */
  size: PropTypes.string,
  /**
   * Color variant to select the color from the available options.
   */
  colorVariant: PropTypes.string,
};

Loader.defaultProps = {
  size: "s",
  colorVariant: "primary",
};
