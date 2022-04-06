import React, { useEffect, useState } from "react";

import { Container, RadioButton, Typography } from "@components";

const RadioButtonStories = {
  title: "Radio Button",
  component: RadioButtonStories,
  argTypes: {},
  args: {},
};

export default RadioButtonStories;

export const RadioButtonComponent = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    // console.log("selected is ", selected);
  }, [selected]);

  return (
    <Container>
      <RadioButton
        value={0}
        selected={selected === 0}
        onSelect={setSelected}
        label="option label 1"
      />
      <RadioButton
        value={1}
        selected={selected === 1}
        onSelect={setSelected}
        labelComponent={
          <Typography color="font.grey200" fontFamily="inter700">
            Option 1
          </Typography>
        }
        containerProp={{ my: 5 }}
      />
      <RadioButton
        value={2}
        selected={selected === 2}
        onSelect={setSelected}
        labelProp={{ fontFamily: "inter700", color: "font.danger" }}
      />
    </Container>
  );
};
