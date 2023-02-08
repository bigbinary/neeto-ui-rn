import React, { useState } from "react";

import { Container, SelectButton } from "@components";

const SelectButtonStories = {
  title: "SelectButton",
  component: SelectButton,
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
    label: "Select button demo",
  },
};

export default SelectButtonStories;

export const SelectButtonDemo = args => {
  const { selected, disabled, label } = args;

  return (
    <Container alignItems="center" flex={1} justifyContent="center">
      <SelectButton
        disabled={disabled}
        label={label}
        selected={selected}
        onSelect={() => {}}
      />
    </Container>
  );
};

export const SelectButtonComponent = () => {
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);

  return (
    <Container>
      <SelectButton
        label={`Button marked as ${!selected1 ? "un" : ""}selected`}
        mt={2}
        selected={selected1}
        onSelect={() => setSelected1(prev => !prev)}
      />
      <SelectButton
        label={`Button marked as ${!selected2 ? "un" : ""}selected`}
        mt={3}
        selected={selected2}
        onSelect={() => setSelected2(prev => !prev)}
      />
      <SelectButton disabled label="Disabled button" mt={3} />
      <SelectButton
        disabled
        selected
        label="Disabled and selected button"
        mt={3}
      />
    </Container>
  );
};
