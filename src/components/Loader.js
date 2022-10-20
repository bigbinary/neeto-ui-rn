/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
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
import { Container } from "@components";

const loaderSize = {
  s: 24,
  m: 36,
  l: 48,
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const Loader = ({ color, size }) => {
  const progress = useSharedValue(0);
  const width = loaderSize[size];
  const stroke_width = width * 0.15;
  const radius = (width - stroke_width) / 2;
  const svgWidth = width;
  const circleLength = (width / 2) * (2 * Math.PI);

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
            stroke={color}
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
  width: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: "s",
  color: "#4558F9",
};
