import React from "react";

import { Loader, Alert, Container, Touchable } from "@components";

const LoaderStories = {
  title: "Loaders",
  component: Loader,
};

export default LoaderStories;

export const Loaders = () => {
  return (
    <Container justifyContent="space-around" flex={1}>
      <Alert />
      <Container flexDirection="row" flex={1}>
        <Loader />
        <Loader size="m" />
        <Loader size="l" />
      </Container>
      <Container flex={1} justifyContent="space-around" alignItems="center">
        <Touchable
          alignItems="center"
          width={100}
          height={28}
          borderRadius={5}
          borderWidth={1}
        >
          <Loader />
        </Touchable>
        <Touchable
          alignItems="center"
          width={120}
          height={40}
          borderRadius={5}
          borderWidth={1}
        >
          <Loader size="m" />
        </Touchable>
        <Touchable
          alignItems="center"
          width={140}
          height={52}
          borderRadius={5}
          borderWidth={1}
        >
          <Loader size="l" />
        </Touchable>
      </Container>
    </Container>
  );
};
