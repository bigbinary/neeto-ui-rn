import React from "react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeProvider } from "styled-components/native";
import { ScrollView } from "react-native";

import { theme } from "@theme";
import { Container } from "@components";

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider theme={theme}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container p={10} flexGrow={1}>
          <Story />
        </Container>
      </ScrollView>
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
