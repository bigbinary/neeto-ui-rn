import React, { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeContext } from "styled-components/native";

import { Typography, BottomTabBar } from "@components";

const BottomTabBarMetaData = {
  title: "BottomTabBar",
  component: BottomTabBar,
  argTypes: {},
  args: {},
};

export default BottomTabBarMetaData;

const Tab = createBottomTabNavigator();

const HomeScreen = () => <Typography fontSize="14px">Home Screen</Typography>;

const SettingsScreen = () => (
  <Typography fontSize="14px">Settings Screen</Typography>
);

const ProfileScreen = () => (
  <Typography fontSize="14px">ProfileScreen Screen</Typography>
);

export const BottomTabBarDemo = () => {
  const theme = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <BottomTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: theme.colors.background.base,
          tabBarInactiveTintColor: theme.colors.background.grey500,
        }}
      >
        <Tab.Screen
          component={HomeScreen}
          name="Home"
          options={{
            customTabBarProps: {
              icon: "home-5-line",
              size: 26,
            },
          }}
        />
        <Tab.Screen
          component={SettingsScreen}
          name="Settings"
          options={{
            title: "SettingsTitle",
            customTabBarProps: {
              icon: "user-3-line",
              size: 26,
            },
          }}
        />
        <Tab.Screen
          component={ProfileScreen}
          name="ProfileScreen"
          options={{
            tabBarLabel: "ProfileScreenLabel",
            customTabBarProps: {
              icon: "user-3-line",
              size: 26,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
