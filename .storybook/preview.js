import React from "react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeProvider } from "styled-components/native";
import { ScrollView } from "react-native";

import { theme } from "@theme";
import { Container } from "@components";
import { NeetoUIRNProvider } from "@components";

export const decorators = [
  withBackgrounds,
  Story => (
    <NeetoUIRNProvider>
      <ThemeProvider theme={theme}>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={{ flexGrow: 1 }}
          disableScrollViewPanResponder={true}
        >
          <Container p={10} flexGrow={1}>
            <Story />
          </Container>
        </ScrollView>
      </ThemeProvider>
    </NeetoUIRNProvider>
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
