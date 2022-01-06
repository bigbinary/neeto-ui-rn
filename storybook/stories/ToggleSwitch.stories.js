import React, { useState } from "react";
import { Container, ToggleSwitch } from "@components";
import { theme } from "@theme";

const labelPositions = ["left", "right"];

const ToggleSwitchStories = {
  title: "ToggleSwitches",
  component: ToggleSwitch,
  args: {
    label: "Toggle Switch Demo",
    labelPosition: labelPositions[0],
    disabled: false,
    switchStyles: {
      backgroundColorOn: theme.colors.background.danger,
      backgroundColorOff: theme.colors.background.base,
    },
    textStyles: {
      mr: 2,
    },
    wrapperStyles: {
      borderWidth: 1,
      borderColor: "grey",
      p: 3,
      borderRadius: 5,
    },
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
    labelPosition: {
      options: labelPositions,
      control: { type: "select" },
    },
    onValueChange: {
      action: "pressed the button",
    },
    switchStyles: {
      control: { type: "object" },
    },
    textStyles: {
      control: { type: "object" },
    },
    wrapperStyles: {
      control: { type: "object" },
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
  const [switchOne, setSwitchOne] = useState(true);
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
          label="Conversation assigned to my group"
        />
      </Container>
      <Container my={3}>
        <ToggleSwitch
          mt={3}
          value={true}
          label="Disabled switched on toggle button"
          disabled
        />
      </Container>
      <Container my={3}>
        <ToggleSwitch
          mt={3}
          value={false}
          label="Disabled switched off toggle button"
          labelPosition="right"
          textStyles={{ ml: 2 }}
          disabled
        />
      </Container>
      <Container my={3}>
        <ToggleSwitch
          mt={3}
          value={switchThree}
          onValueChange={() => setSwitchThree(prevValue => !prevValue)}
          label="Toggle switch button with custom styles"
          labelPosition="right"
          textStyles={{ ml: 2 }}
          wrapperStyles={{
            borderWidth: 1,
            borderColor: "grey",
            p: 3,
            borderRadius: 5,
          }}
          switchStyles={{
            backgroundColorOn: theme.colors.background.danger,
            backgroundColorOff: theme.colors.background.base,
          }}
        />
      </Container>
    </Container>
  );
};
