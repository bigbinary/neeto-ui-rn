import React, { useContext, useEffect } from "react";
import Icon from "react-native-remix-icon";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import { Container, Typography } from "@components";
import { ThemeContext } from "styled-components/native";

/**
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Typography, BottomTabBar  } from '@bigbinary/neetoui-rn';
 * import { NavigationContainer } from '@react-navigation/native';
 * import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 * import { ThemeContext } from "styled-components/native";
 *
 * const Tab = createBottomTabNavigator();
 *
 * const HomeScreen = () => {
 *  return (
 *   <Typography fontSize="14px">Home Screen</Typography>
 *  )
 * }
 *
 * const SettingsScreen = () => {
 *   return (
 *     <Typography fontSize="14px">Settings Screen</Typography>
 *   )
 * }
 *
 * export default function Main() {
 *  const theme = useContext(ThemeContext);
 *  return (
 *    <Tab.Navigator
 *      screenOptions={{
 *        tabBarActiveTintColor: theme.colors.background.base,
 *        tabBarInactiveTintColor: theme.colors.background.grey500,
 *      }}
 *      tabBar={props => <BottomTabBar {...props} />}
 *    >
 *      <Tab.Screen name="Home" component={HomeScreen}
 *        options={{
 *          customTabBarProps: {
 *            icon: "home-5-line",
 *            size: 26,
 *          },
 *        }}
 *      />
 *      <Tab.Screen name="Settings" component={SettingsScreen}
 *        options={{
 *          customTabBarProps: {
 *            icon: "user-3-line",
 *            size: 26,
 *          },
 *        }} />
 *    </Tab.Navigator>
 *  );
 * }
 * ```
 *
 */

function TabElement({
  isFocused,
  onPress,
  name,
  tabBarActiveTintColor,
  tabBarInactiveTintColor,
  icon,
  size,
}) {
  const theme = useContext(ThemeContext);
  const offset = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    if (isFocused) {
      offset.value = withTiming(1, { duration: 500 });
    } else {
      offset.value = withTiming(0, { duration: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(offset.value, [0, 1], [1, 0], {
        extrapolateRight: Extrapolation.CLAMP,
      }),
    };
  });

  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      opacity: interpolate(offset.value, [0, 0.9, 1], [0, 0.5, 1], {
        extrapolateRight: Extrapolation.CLAMP,
      }),
      transform: [
        {
          scale: interpolate(offset.value, [0, 0.8, 1], [1, 1.2, 1], {
            extrapolateRight: Extrapolation.CLAMP,
          }),
        },
      ],
    };
  });

  return (
    <Container
      flex={1}
      onTouchStart={onPress}
      alignItems="center"
      borderTopWidth={1}
      borderColor="background.grey200"
    >
      <Container height={35} width={48} alignItems="center" mb={1}>
        <Animated.View style={[styles.iconContainer, animatedStyles]}>
          <Icon
            size={size}
            color={theme.colors.background.grey200}
            name={icon}
          />
        </Animated.View>
        <Animated.View style={[styles.iconContainer, animatedStyles2]}>
          <Icon size={size} color={theme.colors.background.base} name={icon} />
        </Animated.View>
      </Container>

      <Typography
        color={isFocused ? tabBarActiveTintColor : tabBarInactiveTintColor}
        fontFamily="sf500"
        fontSize="4xs"
      >
        {name}
      </Typography>
    </Container>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    margin: 10,
  },
});

export const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Container flexDirection="row" height={76} bg="background.white">
      {state.routes.map(({ key, name }, index) => {
        const { options } = descriptors[key];
        const isFocused = state.index === index;
        const { icon, size } = options?.customTabBarProps;
        const { tabBarActiveTintColor, tabBarInactiveTintColor } = options;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: name, merge: true });
          }
        };

        return (
          <TabElement
            key={index}
            onPress={onPress}
            isFocused={isFocused}
            name={name}
            tabBarActiveTintColor={tabBarActiveTintColor}
            tabBarInactiveTintColor={tabBarInactiveTintColor}
            icon={icon}
            size={size}
          />
        );
      })}
    </Container>
  );
};

TabElement.propTypes = {
  isFocused: PropTypes.boolean,
  onPress: PropTypes.func,
  name: PropTypes.string,
  tabBarActiveTintColor: PropTypes.string,
  tabBarInactiveTintColor: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.number,
};

BottomTabBar.propTypes = {
  state: PropTypes.object,
  descriptors: PropTypes.object,
  navigation: PropTypes.object,
};
