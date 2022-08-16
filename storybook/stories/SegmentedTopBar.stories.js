import React from "react";
import { Typography, SegmentedTopBar } from "@components";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const SegmentedTopBarMetaData = {
  title: "SegmentedTopBar",
  component: SegmentedTopBar,
  argTypes: {},
  args: {},
};

export default SegmentedTopBarMetaData;

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return <Typography fontSize="14px">Home Screen</Typography>;
};

const SettingsScreen = () => {
  return <Typography fontSize="14px">Settings Screen</Typography>;
};

export const SegmentedTopBarDemo = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <SegmentedTopBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
