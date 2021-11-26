import React from "react";

import {
  LargeTitle,
  Title1,
  Title2,
  Body,
  Caption1,
  Caption2,
  Typography,
  Container,
} from "@components";

const TypographyStories = {
  title: "Foundation/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
  },
};
export default TypographyStories;

export const Defaults = () => {
  return (
    <Container>
      <LargeTitle>This is LargeTitle</LargeTitle>
      <Title1>This is Title1</Title1>
      <Title2>This is Title2</Title2>
      <Body>This is Body</Body>
      <Caption1>This is Caption1</Caption1>
      <Caption2>This is Caption2</Caption2>
    </Container>
  );
};

export const FontColors = () => {
  return (
    <Container>
      <Container backgroundColor="background.base">
        <LargeTitle color="font.white">White</LargeTitle>
      </Container>
      <LargeTitle color="font.black">Black</LargeTitle>
      <LargeTitle color="font.base">Base</LargeTitle>
      <LargeTitle>Primary</LargeTitle>
      <LargeTitle color="font.secondary">Secondary</LargeTitle>
      <LargeTitle color="font.danger">Danger</LargeTitle>
      <LargeTitle color="font.grey100">Grey</LargeTitle>
      <LargeTitle color="font.grey100">Grey 100</LargeTitle>
      <LargeTitle color="font.grey200">Grey 200</LargeTitle>
      <LargeTitle color="font.grey300">Grey 300</LargeTitle>
      <LargeTitle color="font.grey400">Grey 400</LargeTitle>
      <LargeTitle color="font.grey500">Grey 500</LargeTitle>
      <LargeTitle color="font.grey600">Grey 600</LargeTitle>
      <LargeTitle color="font.grey800">Grey 800</LargeTitle>
    </Container>
  );
};

export const FontFamilies = () => {
  return (
    <Container>
      <LargeTitle fontFamily="regular">Regular(weight:400)</LargeTitle>
      <LargeTitle fontFamily="bold">Bold(weight:700)</LargeTitle>
    </Container>
  );
};
