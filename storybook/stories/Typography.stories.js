import React from "react";
import { View } from "react-native";
import { LargeTitle } from "../../lib/";
import { Title1 } from "../../lib";
import { Title2 } from "../../lib";
import { Title3 } from "../../lib";
import { Headline } from "../../lib";
import { Body } from "../../lib";
import { Callout } from "../../lib";
import { Caption1 } from "../../lib";
import { Caption2 } from "../../lib";
import { Typography } from "../../lib";
import Container from "../../lib/components/Container";

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
    <View>
      <LargeTitle>This is LargeTitle</LargeTitle>
      <Title1>This is Title1</Title1>
      <Title2>This is Title2</Title2>
      <Title3>This is Title3</Title3>
      <Headline>This is Headline</Headline>
      <Body>This is Body</Body>
      <Callout>This is Callout</Callout>
      <Caption1>This is Caption1</Caption1>
      <Caption2>This is Caption2</Caption2>
    </View>
  );
};

export const FontColors = () => {
  return (
    <Container>
      <Container backgroundColor="background.base">
        <LargeTitle color="font.default">Default</LargeTitle>
      </Container>
      <LargeTitle color="font.primary">Primary</LargeTitle>
      <LargeTitle color="font.secondary">Secondary</LargeTitle>
      <LargeTitle color="font.danger">Danger</LargeTitle>
    </Container>
  );
};

export const FontFamilies = () => {
  return (
    <View>
      <LargeTitle fontFamily="regular">Regular</LargeTitle>
      <LargeTitle fontFamily="bold">Bold</LargeTitle>
    </View>
  );
};

export const ExampleText = () => {
  return (
    <View>
      <LargeTitle>00:00:00</LargeTitle>
      <Title1>3.7h</Title1>
      <Title2>This is Title2</Title2>
      <Title3>Neeto Chat</Title3>
      <Headline>This is Headline</Headline>
      <Body>This is Body</Body>
      <Callout>This is Callout</Callout>
      <Caption1>Daily Total</Caption1>
      <Caption2>aceinvoice-rn</Caption2>
    </View>
  );
};
