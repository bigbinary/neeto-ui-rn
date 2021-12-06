import React, { useState } from "react";
import { Container, ToggleSwitch } from "@components";

const ToggleSwitchMetaData = {
  title: "ToggleSwitches",
  component: ToggleSwitch,
  argTypes: {
    setValue: { action: "pressed the button" },
  },
  args: {},
};

export default ToggleSwitchMetaData;

export const ToggleSwitches = () => {
  const [switchOne, setSwitchOne] = useState(true);

  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <ToggleSwitch
        value={switchOne}
        setValue={() => setSwitchOne(prevValue => !prevValue)}
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
