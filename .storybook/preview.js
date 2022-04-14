import React from "react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeProvider } from "styled-components/native";
import { FlatList, ScrollView } from "react-native";

import { theme } from "@theme";
import { NeetoUIRNProvider, Container } from "@components";

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider theme={theme}>
      {/* <FlatList
        data={[null]}
        contentContainerStyle={{ flexGrow: 1 }}
        disableScrollViewPanResponder={true}
        renderItem={(_, index) => {
          return (
            <Container key={index} height="100%" p={10}>
              <Story />
            </Container>
          );
        }}
      /> */}
      <NeetoUIRNProvider>
        <Container height="100%" p={10}>
          <Story />
        </Container>
      </NeetoUIRNProvider>
      {/* <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        disableScrollViewPanResponder={true}
      >
        <Container p={10} flexGrow={1}>
          <Story />
        </Container>
      </ScrollView> */}
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
