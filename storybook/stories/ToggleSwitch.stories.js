import React, { useState } from "react";
import { Container, ToggleSwitch } from "@components";

const ToggleSwitchStories = {
  title: "ToggleSwitches",
  component: ToggleSwitch,
  args: {
    disabled: false,
  },
  argTypes: {
    onValueChange: {
      action: "pressed the button",
    },
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
      />
    </Container>
  );
};

export const ToggleSwitches = () => {
  const [switchOne, setSwitchOne] = useState(false);
  const [switchTwo, setSwitchTwo] = useState(true);
  const [switchThree, setSwitchThree] = useState(true);

  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <Container my={3}>
        <ToggleSwitch
          value={switchOne}
          onValueChange={() => setSwitchOne(prevValue => !prevValue)}
        />
      </Container>
      <Container my={3}>
        <ToggleSwitch
          value={switchTwo}
          onValueChange={() => setSwitchTwo(prevValue => !prevValue)}
        />
      </Container>
      <Container my={3}>
        <ToggleSwitch value={true} disabled />
      </Container>
      <Container my={3}>
        <ToggleSwitch value={false} disabled />
      </Container>
      <Container my={3}>
        <ToggleSwitch
          value={switchThree}
          onValueChange={() => setSwitchThree(prevValue => !prevValue)}
        />
      </Container>
    </Container>
  );
};
