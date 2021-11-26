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
      <LargeTitle>Primary</LargeTitle>
      <LargeTitle color="font.secondary">Secondary</LargeTitle>
      <LargeTitle color="font.danger">Danger</LargeTitle>
    </Container>
  );
};

export const FontFamilies = () => {
  return (
    <Container>
      <LargeTitle fontFamily="regular">Regular</LargeTitle>
      <LargeTitle fontFamily="bold">Bold</LargeTitle>
    </Container>
  );
};
