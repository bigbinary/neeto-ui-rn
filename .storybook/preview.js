import React from "react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@theme";
import { Container } from "@components";
import { moderateScale } from "react-native-size-matters";

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider theme={theme}>
      <Container p={moderateScale(10)} flex={1}>
        <Story />
      </Container>
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
