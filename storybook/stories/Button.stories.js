import React from "react";
import { Button } from "../../lib/components/Button";
import { Typography } from "../../lib/components/Typography";

const ButtonMetaData = {
  title: "Foundation/Buttons",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {},
};

export default ButtonMetaData;
const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Typography color="white">Primary</Typography>,
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <Typography>Secondary</Typography>,
  variant: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: <Typography>Disabled</Typography>,
  variant: "disabled",
};
