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
      <Container flexDirection="row">
        <Loader />
        <Loader size="m" colorVariant="primary" />
        <Loader size="l" colorVariant="primary" />
      </Container>
      <Container
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Touchable width={100} height={30} borderRadius={5} borderWidth={1}>
          <Loader />
        </Touchable>
        <Touchable width={100} height={40} borderRadius={5} borderWidth={1}>
          <Loader />
        </Touchable>
        <Touchable width={100} height={40} borderRadius={5} borderWidth={1}>
          <Loader size="m" />
        </Touchable>
      </Container>
    </Container>
  );
};
