import React from "react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@theme";
import { View } from "react-native";

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider theme={theme}>
      <View style={{ padding: 10, flex: 1 }}>
        <Story />
      </View>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: [
    { name: "plain", value: "white", default: true },
    { name: "warm", value: "hotpink" },
    { name: "cool", value: "deepskyblue" },
  ],
};
