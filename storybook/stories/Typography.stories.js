import React from "react";
import { Typography } from "../../lib/components/Typography";

const TypographyStories = {
  title: "Foundation/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
  },
};
export default TypographyStories;

const Template = args => <Typography {...args} />;

export const H1 = Template.bind({});
H1.args = {
  children: "Typhography",
  fontSize: "h1",
};

export const H2 = Template.bind({});
H2.args = {
  children: "Typhography",
  fontSize: "h2",
};

export const H3 = Template.bind({});
H3.args = {
  children: "Typhography",
  fontSize: "h3",
};

export const H4 = Template.bind({});
H4.args = {
  children: "Typhography",
  fontSize: "h4",
};

export const H5 = Template.bind({});
H5.args = {
  children: "Typhography",
  fontSize: "h5",
};

export const H6 = Template.bind({});
H6.args = {
  children: "Typhography",
  fontSize: "h6",
};

export const Body1 = Template.bind({});
Body1.args = {
  children: "Typhography",
  fontSize: "body1",
};

export const Body2 = Template.bind({});
Body2.args = {
  children: "Typhography",
  fontSize: "body2",
};

export const Body3 = Template.bind({});
Body3.args = {
  children: "Typhography",
  fontSize: "body3",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Typography",
  color: "primary",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Typography",
  color: "error",
};
