import React from "react";
import { Button } from "../../lib/components/Button";

const ButtonMetaData = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
};

export default ButtonMetaData;

export const Basic = args => <Button {...args} />;
