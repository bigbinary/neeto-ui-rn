import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import PropTypes from "prop-types";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";

import { theme } from "@theme";

const springConfig = {
  mass: 1,
  overshootClamping: true,
  restSpeedThreshold: 0.5,
  restDisplacementThreshold: 0.5,
};

const spacing = moderateScale(6);

export const Indicator = ({ measure }) => {
  const { x, width, height } = measure;

  const translateX = useSharedValue(0);
  const animatedWidth = useSharedValue(0);

  useEffect(() => {
    cancelAnimation(translateX);
    cancelAnimation(animatedWidth);

    translateX.value = withSpring(x + spacing / 2, springConfig);
    animatedWidth.value = withSpring(width - spacing, springConfig);
  }, [animatedWidth, translateX, width, x]);

  const tabTranslateAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: animatedWidth.value,
  }));

  return (
    <Animated.View
      style={[
        styles.movingSegmentStyle,
        { height: height - spacing },
        tabTranslateAnimatedStyles,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  movingSegmentStyle: {
    position: "absolute",
    top: spacing / 2,
    borderRadius: moderateScale(6),
    backgroundColor: theme.colors.background.primary,
    shadowColor: theme.colors.background.base,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});

Indicator.propTypes = {
  measure: PropTypes.shape({
    x: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};
