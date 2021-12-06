import React, { useState } from "react";
import { Container, ToggleSwitch } from "@components";

const ToggleSwitchStories = {
  title: "ToggleSwitches",
  component: ToggleSwitch,
  parameters: {
    notes: "Checkout the different props in controls section",
  },
};

const Template = args => {
  const [switchOne, setSwitchOne] = useState(true);

  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <ToggleSwitch
        {...args}
        value={switchOne}
        onValueChange={() => setSwitchOne(prevValue => !prevValue)}
        label="Conversation assigned to my group"
      />
    </Container>
  );
};

export const ToggleSwitches = Template.bind({});
ToggleSwitches.args = {
  disabled: false,
};

export default ToggleSwitchStories;
