import React, { useContext } from "react";
import { Typography, TabBar } from "@components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "styled-components/native";

const TabBarMetaData = {
  title: "TabBar",
  component: TabBar,
  argTypes: {},
  args: {},
};

export default TabBarMetaData;

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <Typography fontSize="14px">Home Screen</Typography>;
};

const SettingsScreen = () => {
  return <Typography fontSize="14px">Settings Screen</Typography>;
};

export const TabBarDemo = () => {
  const theme = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.background.base,
          tabBarInactiveTintColor: theme.colors.background.grey500,
        }}
        tabBar={props => <TabBar {...props} />}
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
