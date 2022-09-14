import React, { useContext } from "react";
import { Typography, BottomTabBar } from "@components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "styled-components/native";

const BottomTabBarMetaData = {
  title: "BottomTabBar",
  component: BottomTabBar,
  argTypes: {},
  args: {},
};

export default BottomTabBarMetaData;

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <Typography fontSize="14px">Home Screen</Typography>;
};

const SettingsScreen = () => {
  return <Typography fontSize="14px">Settings Screen</Typography>;
};

const ProfileScreen = () => {
  return <Typography fontSize="14px">ProfileScreen Screen</Typography>;
};

export const BottomTabBarDemo = () => {
  const theme = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.background.base,
          tabBarInactiveTintColor: theme.colors.background.grey500,
        }}
        tabBar={props => <BottomTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            customTabBarProps: {
              icon: "home-5-line",
              size: 26,
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "SettingsTitle",
            customTabBarProps: {
              icon: "user-3-line",
              size: 26,
            },
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
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
