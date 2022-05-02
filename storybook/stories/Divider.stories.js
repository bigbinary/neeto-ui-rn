import React from "react";
import { Container, Typography, Divider } from "@components";
import { theme } from "../../src/theme";

const orientations = ["horizontal", "vertical"];
const bgColors = Object.keys(theme.colors.background).map(
  color => `background.${color}`
);

const DividerStories = {
  title: "Dividers",
  component: Divider,
  args: {
    orientation: orientations[0],
    thickness: 10,
    bg: bgColors[4],
  },
  argTypes: {
    orientation: {
      options: orientations,
      control: { type: "select" },
    },
    thickness: {
      control: { type: "number" },
    },
    bg: {
      options: bgColors,
      control: {
        type: "select",
      },
    },
  },
  parameters: {
    notes: "Checkout the different props in controls section",
  },
};

export default DividerStories;

export const DividerDemo = args => {
  return (
    <Container flex={1}>
      <Divider {...args} />
    </Container>
  );
};

export const Dividers = () => {
  return (
    <Container
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Container flex={5} justifyContent="center">
        <Divider
          orientation="horizontal"
          thickness={5}
          bg="background.danger"
        />
        <Typography>Horizontal Line</Typography>
      </Container>

      <Container flex={5} mx={20}>
        <Divider orientation="vertical" thickness={5} bg="background.danger" />
        <Typography>Vertical Line</Typography>
      </Container>
    </Container>
  );
};
