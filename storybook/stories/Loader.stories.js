import React from "react";

import { Loader, Alert, Container, Touchable } from "@components";
import { theme } from "@theme";

const LoaderStories = {
  title: "Loaders",
  component: Loader,
};

export default LoaderStories;

export const Loaders = () => {
  return (
    <Container
      justifyContent="space-around"
      flex={1}
      // bg={theme.colors.background.grey100}
    >
      <Alert />
      <Container flexDirection="row" justifyContent="space-around" flex={1}>
        <Loader color={theme.colors.font.grey400} />
        <Loader size="m" color={theme.colors.font.grey600} />
        <Loader size="l" color={theme.colors.font.grey800} />
      </Container>
      <Container flex={1} justifyContent="space-around" alignItems="center">
        <Touchable
          justifyContent="center"
          width={100}
          height={28}
          borderRadius={5}
          borderWidth={1}
          borderColor="border.grey800"
        >
          <Loader color={theme.colors.font.grey800} />
        </Touchable>
        <Touchable
          justifyContent="center"
          width={120}
          height={40}
          borderRadius={5}
          borderWidth={1}
          borderColor="border.grey600"
        >
          <Loader size="m" color={theme.colors.font.grey600} />
        </Touchable>
        <Touchable
          justifyContent="center"
          width={140}
          height={52}
          borderRadius={5}
          borderWidth={1}
          borderColor="border.grey400"
        >
          <Loader size="l" color={theme.colors.font.grey400} />
        </Touchable>
      </Container>
    </Container>
  );
};
