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

export const Primary = Template.bind({});
Primary.args = {
  style: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  style: "secondary",
  label: "Button",
};
