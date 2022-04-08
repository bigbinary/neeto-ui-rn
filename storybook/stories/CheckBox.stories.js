import React, { useState } from "react";

import { Container, CheckBox, Typography } from "@components";

const CheckBoxStories = {
  title: "Checkbox",
  component: CheckBoxStories,
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
    labelPosition: {
      options: ["left", "right"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    disabled: false,
    selected: false,
    labelPosition: "right",
  },
};

export default CheckBoxStories;

export const CheckBoxDemo = args => {
  const { selected, disabled, labelPosition } = args;
  return (
    <Container>
      <CheckBox
        selected={selected}
        onSelect={() => {}}
        disabled={disabled}
        labelPosition={labelPosition}
      />
    </Container>
  );
};

export const CheckBoxComponent = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckbox = index => {
    const oldData = [...selectedValues];
    const itemIndex = selectedValues.indexOf(index);
    if (itemIndex === -1) {
      oldData.push(index);
    } else {
      oldData.splice(itemIndex, 1);
    }
    setSelectedValues(oldData);
  };

  const containerStyle = { borderColor: "green" };
  const checkedItemProp = { color: "font.danger" };

  return (
    <Container>
      <Container mt={2}>
        <CheckBox
          selected={selectedValues.indexOf(0) !== -1}
          onSelect={() => handleCheckbox(0)}
          checkboxContainerProp={containerStyle}
          label="Custom border color"
        />
      </Container>
      <Container mt={2}>
        <CheckBox
          selected={selectedValues.indexOf(1) !== -1}
          onSelect={() => handleCheckbox(1)}
          checkedComponent={
            <Container width={10} height={10} bg="background.base" />
          }
          label="With Custom Checked Component"
        />
      </Container>
      <Container mt={2}>
        <CheckBox
          selected={selectedValues.indexOf(2) !== -1}
          onSelect={() => handleCheckbox(2)}
          checkedItemProp={checkedItemProp}
          labelComponent={
            <Typography color="font.danger" ml={2}>
              Custom label component
            </Typography>
          }
        />
      </Container>
      <Container mt={2}>
        <CheckBox
          selected={true}
          onSelect={() => {}}
          label="Disabled"
          disabled
        />
      </Container>
    </Container>
  );
};
