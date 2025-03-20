import React, {
  createRef,
  useState,
  useMemo,
  useRef,
  useLayoutEffect,
} from "react";
import { StyleSheet, View } from "react-native";

import PropTypes from "prop-types";
import { moderateScale } from "react-native-size-matters";

import { theme } from "@theme";

import { Indicator } from "./Indicator";
import { Tab } from "./Tab";

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
 *          options={{ count: 8 }}
 *        />
 *
 *        <Tab.Screen
 *          name="Settings"
 *          component={SettingsScreen}
 *          options={{ count: 10 }}
 *        />
 *      </Tab.Navigator>
 *    </NavigationContainer>
 *  );
 * }
 * ```
 */

export const SegmentedTopBar = ({
  state: { routes, index },
  navigation,
  height,
  descriptors,
}) => {
  const containerRef = useRef();

  const [measures, setMeasures] = useState([]);

  const tabsData = useMemo(
    () =>
      routes.map(({ key, name }) => {
        const { options } = descriptors[key];
        const label = options.tabBarLabel ?? options.title ?? name;
        const count = options.count;

        return { label, value: name, ref: createRef(), count };
      }),
    [descriptors, routes]
  );

  useLayoutEffect(() => {
    const _measures = [];

    tabsData.forEach(({ ref }) => {
      ref.current.measureLayout(containerRef.current, (x, y, width, height) => {
        _measures.push({ x, y, width, height });

        if (_measures.length === tabsData.length) {
          setMeasures(_measures);
        }
      });
    });
  }, [measures.length]);

  return (
    <View height={height} ref={containerRef} style={styles.container}>
      {measures.length > 0 && <Indicator measure={measures[index]} />}
      {tabsData.map(({ label, value, ref, count }) => (
        <Tab
          count={count}
          flex={tabsData.length > 3 ? label.length : 1}
          key={value}
          label={label}
          navigation={navigation}
          ref={ref}
          value={value}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: moderateScale(6),
    backgroundColor: theme.colors.background.secondary,
  },
});

SegmentedTopBar.propTypes = {
  state: PropTypes.object,
  height: PropTypes.number,
  navigation: PropTypes.object,
  descriptors: PropTypes.object,
};

SegmentedTopBar.defaultProps = {
  tabs: [],
  height: moderateScale(48),
};
