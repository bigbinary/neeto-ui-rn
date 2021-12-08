import React, { useState } from "react";
import { Container, ToggleSwitch } from "@components";

const ToggleSwitchStories = {
  title: "ToggleSwitches",
  component: ToggleSwitch,
  argTypes: {
    onValueChange: { action: "pressed the button" },
  },
  args: {
    disabled: false,
  },
  parameters: {
    notes: "Checkout the different props in controls section",
  },
};

export default ToggleSwitchStories;

export const ToggleSwitchDemo = args => {
  const [demoSwitch, setDemoSwitch] = useState(true);

  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <ToggleSwitch
        {...args}
        value={demoSwitch}
        onValueChange={() => setDemoSwitch(prevValue => !prevValue)}
        label="Toggle Switch Demo"
      />
    </Container>
  );
};

export const ToggleSwitches = () => {
  const [switchOne, setSwitchOne] = useState(true);

  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <ToggleSwitch
        value={switchOne}
        onValueChange={() => setSwitchOne(prevValue => !prevValue)}
        label="Conversation assigned to my group"
      />
      <ToggleSwitch
        mt={3}
        value={true}
        label="Disabled switched on toggle button"
        disabled
      />
      <ToggleSwitch
        mt={3}
        value={false}
        label="Disabled switched off toggle button"
        disabled
      />
    </Container>
  );
};
