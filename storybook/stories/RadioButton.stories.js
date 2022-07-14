import React, { useState } from "react";

import { Container, RadioButton } from "@components";

const RadioButtonStories = {
  title: "RadioButton",
  component: RadioButton,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    selected: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    disabled: false,
    selected: false,
    label: "Radio button demo",
  },
};

export default RadioButtonStories;

export const RadioButtonDemo = args => {
  const { selected, disabled, label } = args;
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <RadioButton
        label={label}
        selected={selected}
        onSelect={() => {}}
        disabled={disabled}
      />
    </Container>
  );
};

export const RadioButtonComponent = () => {
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);

  return (
    <Container>
      <RadioButton
        mt={2}
        selected={selected1}
        onSelect={() => setSelected1(prev => !prev)}
        label={`Radio button marked as ${!selected1 ? "un" : ""}selected`}
      />
      <RadioButton
        mt={3}
        selected={selected2}
        onSelect={() => setSelected2(prev => !prev)}
        label={`Radio button marked as ${!selected2 ? "un" : ""}selected`}
      />
      <RadioButton mt={3} disabled label="Disabled radio button" />
    </Container>
  );
};
