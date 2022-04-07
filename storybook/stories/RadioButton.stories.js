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
        selected={selected === 0}
        onSelect={() => setSelected(0)}
        label="option label 1"
        labelPosition="left"
      />
      <RadioButton
        selected={selected === 1}
        onSelect={() => setSelected(1)}
        labelComponent={
          <Typography color="font.grey200" fontFamily="inter700">
            Option 1
          </Typography>
        }
        containerProp={{ my: 5 }}
      />
      <RadioButton
        selected={selected === 2}
        onSelect={() => setSelected(2)}
        labelProp={{ fontFamily: "inter700", color: "font.danger" }}
      />
    </Container>
  );
};
