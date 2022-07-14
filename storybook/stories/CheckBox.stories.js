import React, { useState } from "react";

import { Container, CheckBox } from "@components";

const CheckBoxStories = {
  title: "Checkbox",
  component: CheckBox,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    checked: {
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
    checked: false,
    label: "Checkbox demo",
  },
};

export default CheckBoxStories;

export const CheckBoxDemo = args => {
  const { checked, disabled, label } = args;
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <CheckBox
        label={label}
        checked={checked}
        onSelect={() => {}}
        disabled={disabled}
      />
    </Container>
  );
};

export const CheckBoxComponent = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  return (
    <Container>
      <CheckBox
        mt={2}
        checked={checked1}
        onSelect={() => setChecked1(prev => !prev)}
        label={`Checkbox marked as ${!checked1 ? "un" : ""}checked`}
      />
      <CheckBox
        mt={3}
        checked={checked2}
        onSelect={() => setChecked2(prev => !prev)}
        label={`Checkbox marked as ${!checked2 ? "un" : ""}checked`}
      />
      <CheckBox mt={3} disabled label="Disabled checkbox" />
    </Container>
  );
};
