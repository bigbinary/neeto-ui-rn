import React from "react";
import { Container, Typography, FAB } from "@components";

const FABStories = {
  title: "FABs",
  component: FAB,
  argTypes: {
    variant: {
      options: ["solid", "inverse"],
      control: { type: "radios" },
    },
    onPress: { action: "pressed the button" },
  },
  parameters: {
    notes: "Checkout the different props in controls section",
  },
};

const Template = args => (
  <Container flex={1} justifyContent="center" alignItems="center">
    <FAB
      {...args}
      Icon={() => {
        return <Typography>🔔</Typography>;
      }}
    />
  </Container>
);

export const FABS = Template.bind({});
FABS.args = {
  variant: "solid",
  disabled: false,
  bg: "",
};

export default FABStories;
