import React from "react";

import { moderateScale } from "react-native-size-matters";

import { LineLoader, Typography, Container } from "@components";

const LineLoaderMetaData = {
  title: "LineLoader",
  component: LineLoaders,
};

export default LineLoaderMetaData;

export const LineLoaders = () => (
  <Container flex={1}>
    <Container pb={moderateScale(10)}>
      <Typography pb={moderateScale(5)}>Loading On:</Typography>
      <LineLoader isLoading />
    </Container>
    <Container pb={moderateScale(10)}>
      <Typography pb={moderateScale(5)}>
        Loading On with Custom background color:
      </Typography>
      <LineLoader isLoading backgroundColor="grey" />
    </Container>
    <Container pb={moderateScale(10)}>
      <Typography pb={moderateScale(5)}>
        Loading On with Custom Foreground and background colors:
      </Typography>
      <LineLoader isLoading backgroundColor="red" foregroundColor="green" />
    </Container>
  </Container>
);
