import React, { useState } from "react";

import { Container, CheckBox, Typography } from "@components";

const CheckBoxStories = {
  title: "Checkbox",
  component: CheckBoxStories,
  argTypes: {},
  args: {},
};

export default CheckBoxStories;

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
  const checkedItemStyle = { color: "font.danger" };

  return (
    <Container>
      <Container flexDirection="row">
        <CheckBox
          selected={selectedValues.indexOf(0) !== -1}
          onSelect={() => handleCheckbox(0)}
          containerStyle={containerStyle}
        />
        <Typography>Custom border color</Typography>
      </Container>
      <Container flexDirection="row" my={2}>
        <CheckBox
          selected={selectedValues.indexOf(1) !== -1}
          onSelect={() => handleCheckbox(1)}
          checkedComponent={
            <Container width={10} height={10} bg="background.base" />
          }
        />
        <Typography>With Custom Checked Component</Typography>
      </Container>
      <Container flexDirection="row">
        <CheckBox
          selected={selectedValues.indexOf(2) !== -1}
          onSelect={() => handleCheckbox(2)}
          checkedItemStyle={checkedItemStyle}
        />
        <Typography>Custom color</Typography>
      </Container>
    </Container>
  );
};
