/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Dimensions, Platform, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Typography, Touchable } from "@components";
import { theme } from "@theme";

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
 *   <img src="screenshots/toptabbar/toptabbar-1.png" />
 *   <img src="screenshots/toptabbar/toptabbar-2.png" />
 * </div>
 *
 *   ## Usage
 * ```js
 * import * as React from 'react';
 * import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
 * import { NavigationContainer } from "@react-navigation/native";
 *
 * import { SegmentedTopBar } from '@bigbinary/neetoui-rn';
 *
 * const Tab = createMaterialTopTabNavigator();
 *
 * export default function Main(){
 *
 *  return (
 *    <NavigationContainer>
 *      <Tab.Navigator tabBar={props => <SegmentedTopBar {...props} />} >
 *        <Tab.Screen
 *          name="Home"
 *          component={HomeScreen}
 *        />
 *
 *        <Tab.Screen
 *          name="Settings"
 *          component={SettingsScreen}
 *        />
 *      </Tab.Navigator>
 *    </NavigationContainer>
 *  );
 * }
 * ```
 */

export const SegmentedTopBar = ({
  state: { routes, index },
  inactiveSegmentStyle,
  activeSegmentStyle,
  activeTextStyle,
  inactiveTextStyle,
  navigation,
  height,
  descriptors,
}) => {
  const translateValue = (width - 4) / routes?.length;
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
            width: (width - 4) / routes?.length,
          },
          tabTranslateAnimatedStyles,
        ]}
      />
      {routes.map((route, i) => {
        const currentIndexTextStyle =
          index === index + 1 ? activeTextStyle : inactiveTextStyle;
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        return (
          <Touchable
            onPress={() => navigation.navigate(route.name)}
            key={i}
            flex={1}
            height={height}
            alignItems="center"
            justifyContent="center"
            elevation={Platform.OS === "android" ? 9 : null}
            {...currentIndexTextStyle}
          >
            <Typography
              fontSize="xs"
              textAlign="center"
              color="font.grey800"
              fontFamily="sf500"
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

SegmentedTopBar.propTypes = {
  /**
   * Navigation routes and additional data.
   */
  state: PropTypes.object,
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
  navigation: PropTypes.object,
  descriptors: PropTypes.object,
};

SegmentedTopBar.defaultProps = {
  tabs: [],
  height: 32,
};
