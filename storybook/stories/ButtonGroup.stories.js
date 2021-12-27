import React, { useState } from "react";
import { Container, ButtonGroup } from "@components";
import { theme } from "@theme";

const buttonItems = ["Button1", "Button2"];
const backgroundColors = Object.keys(theme.colors.background).map(
  color => `background.${color}`
);
const fontSizes = Object.keys(theme.fontSizes);

const ButtonGroupStories = {
  title: "Button Group",
  component: ButtonGroup,
  args: {
    buttonItems: buttonItems,
    currentActiveBtn: buttonItems[0],
    activeColor: backgroundColors[13],
    inActiveColor: backgroundColors[1],
    buttonStyle: { borderColor: backgroundColors[13] },
    wrapperStyle: { borderColor: backgroundColors[13] },
    buttonTextStyle: { fontSize: fontSizes[2] },
  },
  argTypes: {
    buttonItems: {
      separator: ",",
      control: { type: "array" },
    },
    activeColor: {
      options: backgroundColors,
      control: { type: "select" },
    },
    inActiveColor: {
      options: backgroundColors,
      control: { type: "select" },
    },
    buttonStyle: {
      control: { type: "object" },
    },
    buttonTextStyle: {
      control: { type: "object" },
    },
    wrapperStyle: {
      control: { type: "object" },
    },
    onPress: { action: "pressed the button" },
  },
  parameters: {
    notes:
      "Checkout the supported control/actions in control and actions section respectively.",
  },
};

export default ButtonGroupStories;

export const ButtonGroupDemo = args => {
  return (
    <Container>
      <ButtonGroup {...args} />
    </Container>
  );
};

export const ButtonGroups = () => {
  const buttonItems1 = ["Button1", "Button2"];
  const buttonItems2 = ["Button1", "Button2", "Button3"];
  const buttonItems3 = ["Button1", "Button2", "Button3"];
  const [activeButton1, setActiveButton1] = useState(buttonItems1[0]);
  const [activeButton2, setActiveButton2] = useState(buttonItems2[0]);
  const [activeButton3, setActiveButton3] = useState(buttonItems3[2]);

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container my={2}>
        <ButtonGroup
          buttonItems={buttonItems1}
          onPress={setActiveButton1}
          currentActiveBtn={activeButton1}
        />
      </Container>
      <Container my={2}>
        <ButtonGroup
          buttonItems={buttonItems2}
          onPress={setActiveButton2}
          currentActiveBtn={activeButton2}
          buttonStyle={{ border: theme.colors.font.grey600 }}
        />
      </Container>
      <Container my={2}>
        <ButtonGroup
          activeColor={theme.colors.font.danger}
          inActiveColor={theme.colors.font.grey200}
          buttonItems={buttonItems3}
          onPress={setActiveButton3}
          currentActiveBtn={activeButton3}
          buttonStyle={{ border: theme.colors.font.grey600 }}
          wrapperStyle={{ borderColor: theme.colors.font.grey600 }}
        />
      </Container>
    </Container>
  );
};
