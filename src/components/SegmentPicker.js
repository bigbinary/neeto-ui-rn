/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Typography, Touchable } from "@components";
import { theme } from "@theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

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
 *
 *  return (
 *    <Container flex={1} alignItems="center" justifyContent="center">
 *      <Container my={3}>
 *        <SegmentPicker
 *          tabs={[{ name: "On", Component: CustomComponent }, { name: "Off", Component: CustomComponent }]}
 *        />
 *      </Container>
 *    </Container>
 *  );
 * }
 * ```
 */

export const SegmentPicker = segmentProps => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabBar {...segmentProps} {...props} />}>
        {segmentProps.tabs.map(({ name, Component }, index) => {
          return <Tab.Screen key={index} name={name} component={Component} />;
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const TabBar = ({
  activeTextStyle,
  activeSegmentStyle,
  height,
  inactiveTextStyle,
  inactiveSegmentStyle,
  navigation,
  state: { index = 0 },
  tabs,
}) => {
  const translateValue = (width - 4) / tabs?.length;
  const tabTranslateValue = useSharedValue(0);

  useEffect(() => {
    tabTranslateValue.value = withSpring(
      index * (translateValue * 1),
      DEFAULT_SPRING_CONFIG
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

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
      {tabs.map(({ name }, i) => {
        const currentIndexTextStyle =
          index === index + 1 ? activeTextStyle : inactiveTextStyle;
        return (
          <Touchable
            onPress={() => navigation.navigate(name)}
            key={i}
            flex={1}
            height={height}
            alignItems="center"
            justifyContent="center"
            {...currentIndexTextStyle}
          >
            <Typography
              fontSize="xs"
              textAlign="center"
              color="font.grey800"
              fontFamily="sf500"
            >
              {name}
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
    marginBottom: 5,
  },
  movingSegmentStyle: {
    top: 0,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
  },
});

TabBar.propTypes = {
  /**
   * Array of texts for the labels of each Segment/Tab.
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    })
  ).isRequired,
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

TabBar.defaultProps = {
  tabs: [],
  height: 32,
};
