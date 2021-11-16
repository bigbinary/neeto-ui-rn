import React from "react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../lib/theme";

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
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
