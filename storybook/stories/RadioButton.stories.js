import React, { useEffect, useState } from "react";

import { Container, RadioButton, Typography } from "@components";

const RadioButtonStories = {
  title: "Radio Button",
  component: RadioButtonStories,
  argTypes: {
    labelPosition: {
      options: ["left", "right"],
      control: {
        type: "select",
      },
    },
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
    label: "Hello",
    disabled: false,
    selected: false,
    labelPosition: "right",
  },
};

export default RadioButtonStories;

export const RadioButtonDemo = args => {
  const { label, selected, disabled, labelPosition } = args;
  return (
    <Container>
      <RadioButton
        selected={selected}
        onSelect={() => {}}
        label={label}
        labelPosition={labelPosition}
        disabled={disabled}
      />
    </Container>
  );
};

export const RadioButtons = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    // console.log("selected is ", selected);
  }, [selected]);

  return (
    <Container>
      <RadioButton
        selected={selected === 0}
        onSelect={() => setSelected(0)}
        label="Left label"
        labelPosition="left"
      />
      <RadioButton
        selected={selected === 1}
        onSelect={() => setSelected(1)}
        label="Right label"
        labelPosition="right"
      />
      <RadioButton
        selected={selected === 3}
        onSelect={() => setSelected(3)}
        disabled
        label="Disabled"
      />
      <RadioButton
        selected={selected === 2}
        onSelect={() => setSelected(2)}
        labelComponent={
          <Typography color="font.grey200" mx={2} fontFamily="inter700">
            With custom padding and color
          </Typography>
        }
        my={5}
      />
    </Container>
  );
};
