/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React, { useEffect, useCallback } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Typography, Touchable, Container } from "@components";
import { theme } from "@theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export const T = () => (
  <Container>
    <Typography> Testing tabs</Typography>
  </Container>
);

const defaultShadowStyle = {
  shadowColor: theme.colors.background.grey800,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};

// eslint-disable-next-line @bigbinary/neeto/no-dangling-constants
const DEFAULT_SPRING_CONFIG = {
  stiffness: 150,
  damping: 20,
  mass: 1,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

// So that it stretches in landscape mode.
const width = Dimensions.get("screen").width - 32;

/**
 *
 * A Segment Picker component that provides toggling between two or more views.
 *
 * <div class="screenshots">
 *   <img src="screenshots/segmentPicker/segmentpickers.png" />
 * </div>
 *
 *   ## Usage
 * ```js
 * import * as React from 'react';
 * import { Container, SegmentPicker } from '@bigbinary/neetoui-rn';
 *
 * export default function Main(){
 *   const [tabIndex, setTabIndex] = useState(1);
 *
 *  return (
 *    <Container flex={1} alignItems="center" justifyContent="center">
 *      <Container my={3}>
 *        <SegmentPicker
 *          tabs={["On", "Off"]}
 *          currentIndex={tabIndex}
 *          onChange={setTabIndex}
 *        />
 *      </Container>
 *    </Container>
 *  );
 * }
 * ```
 */

export const SegmentPicker = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="dd" component={T} />
        <Tab.Screen name="wdd" component={T} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export const SegmentPicker1 = ({
  tabs,
  onChange,
  currentIndex,
  inactiveSegmentStyle,
  activeSegmentStyle,
  activeTextStyle,
  inactiveTextStyle,
  height,
}) => {
  const translateValue = (width - 4) / tabs?.length;
  const tabTranslateValue = useSharedValue(0);

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = useCallback(
    index => {
      onChange(index);
    },
    [onChange]
  );

  useEffect(() => {
    tabTranslateValue.value = withSpring(
      currentIndex * (translateValue * 1),
      DEFAULT_SPRING_CONFIG
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const tabTranslateAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabTranslateValue.value }],
    };
  });

  return (
    <Animated.View
      style={[styles.defaultSegmentedControlWrapper, inactiveSegmentStyle]}
    >
      <Animated.View
        style={[
          styles.movingSegmentStyle,
          activeSegmentStyle,
          defaultShadowStyle,
          StyleSheet.absoluteFill,
          {
            width: width / tabs?.length,
          },
          tabTranslateAnimatedStyles,
        ]}
      />

      {tabs.map((label, index) => {
        const currentIndexTextStyle =
          currentIndex === index ? activeTextStyle : inactiveTextStyle;
        return (
          <Touchable
            key={index}
            flex={1}
            onPress={() => memoizedTabPressCallback(index)}
            height={height}
            justifyContent="center"
            activeOpacity={0.7}
          >
            <Typography
              fontSize="xs"
              textAlign="center"
              color="font.grey800"
              fontFamily="sf500"
              {...currentIndexTextStyle}
            >
              {label}
            </Typography>
          </Touchable>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  segmentedControlWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    width: width,
  },
  defaultSegmentedControlWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F6F6FA",
    width: width,
  },
  movingSegmentStyle: {
    top: 0,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
  },
});

SegmentPicker.propTypes = {
  /**
   * Array of texts for the labels of each Segment/Tab.
   */
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Callback called with the new value when it changes.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Index value of the currently selected Segment/Tab.
   */
  currentIndex: PropTypes.number.isRequired,
  /**
   * To change the inactive segment container style.
   */
  inactiveSegmentStyle: PropTypes.object,
  /**
   * To change the active segment container style.
   */
  activeSegmentStyle: PropTypes.object,
  /**
   * To change the inactive segment font style.
   */
  inactiveTextStyle: PropTypes.object,
  /**
   * To change the active segment font style.
   */
  activeTextStyle: PropTypes.object,
  height: PropTypes.number,
};

SegmentPicker.defaultProps = {
  tabs: [],
  onChange: () => {},
  currentIndex: 0,
  height: 32,
};
