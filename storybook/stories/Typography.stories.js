import React from "react";
import { View } from "react-native";
import { LargeTitle } from "../../lib/components/Typography/LargeTitle";
import { Title1 } from "../../lib/components/Typography/Title1";
import { Title2 } from "../../lib/components/Typography/Title2";
import { Title3 } from "../../lib/components/Typography/Title3";
import { Headline } from "../../lib/components/Typography/Headline";
import { Body } from "../../lib/components/Typography/Body";
import { Callout } from "../../lib/components/Typography/Callout";
import { Subhead } from "../../lib/components/Typography/Subhead";
import { Footnote } from "../../lib/components/Typography/Footnote";
import { Caption1 } from "../../lib/components/Typography/Caption1";
import { Caption2 } from "../../lib/components/Typography/Caption2";
import { Typography } from "../../lib/components/Typography/Typography";

const TypographyStories = {
  title: "Foundation/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
  },
};
export default TypographyStories;

// const Template = args => <Typography {...args} />;

// export const H1 = Template.bind({});
// H1.args = {
//   children: "Typhography",
//   fontSize: "h1",
// };

// export const H2 = Template.bind({});
// H2.args = {
//   children: "Typhography",
//   fontSize: "h2",
// };

// export const H3 = Template.bind({});
// H3.args = {
//   children: "Typhography",
//   fontSize: "h3",
// };

// export const H4 = Template.bind({});
// H4.args = {
//   children: "Typhography",
//   fontSize: "h4",
// };

// export const H5 = Template.bind({});
// H5.args = {
//   children: "Typhography",
//   fontSize: "h5",
// };

// export const H6 = Template.bind({});
// H6.args = {
//   children: "Typhography",
//   fontSize: "h6",
// };

// export const Body1 = Template.bind({});
// Body1.args = {
//   children: "Typhography",
//   fontSize: "body1",
// };

// export const Body2 = Template.bind({});
// Body2.args = {
//   children: "Typhography",
//   fontSize: "body2",
// };

// export const Body3 = Template.bind({});
// Body3.args = {
//   children: "Typhography",
//   fontSize: "body3",
// };

// export const Primary = Template.bind({});
// Primary.args = {
//   children: "Typography",
//   color: "primary",
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   children: "Typography",
//   color: "error",
// };

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
      <Subhead>This is Subhead</Subhead>
      <Footnote>This is Footnote</Footnote>
      <Caption1>This is Caption1</Caption1>
      <Caption2 color="font.danger">This is Caption2</Caption2>
    </View>
  );
};

export const FontColors = () => {
  return (
    <View>
      <View style={{ backgroundColor: "black" }}>
        <LargeTitle color="font.default">Default</LargeTitle>
      </View>
      <LargeTitle color="font.primary">Primary</LargeTitle>
      <LargeTitle color="font.secondary">Secondary</LargeTitle>
      <LargeTitle color="font.danger">Danger</LargeTitle>
    </View>
  );
};
