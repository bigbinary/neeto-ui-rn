import React from "react";

import { Container, Avatar, Typography } from "@components";
import { theme } from "../../src/theme";

const name = "Oliver Smith";
const fontColors = Object.keys(theme.colors.font).map(color => `font.${color}`);
const variants = ["small", "medium"];
const bgColors = Object.keys(theme.colors.background).map(
  color => `background.${color}`
);

const AvatarStories = {
  title: "Avatars",
  component: Avatar,
  args: {
    name,
    variant: variants[0],
    fontColor: fontColors[0],
    bgColor: bgColors[0],
    imageUrl: "",
  },
  argTypes: {
    variant: {
      options: variants,
      control: {
        type: "select",
      },
    },
    fontColor: {
      options: fontColors,
      control: {
        type: "select",
      },
    },
    bgColor: {
      options: bgColors,
      control: {
        type: "select",
      },
    },
  },
};
export default AvatarStories;

export const AvatarDemo = args => {
  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <Avatar {...args} />
    </Container>
  );
};

export const TextSizes = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flexDirection="row" alignItems="center">
        <Avatar name="John Doe" margin={2} />
        <Typography fontSize="xl">Medium</Typography>
      </Container>
      <Container flexDirection="row" alignItems="center">
        <Avatar name="John Doe" variant="small" />
        <Typography fontSize="xl">Small</Typography>
      </Container>
    </Container>
  );
};

export const ImageSizes = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flexDirection="row" alignItems="center">
        <Avatar imageUrl="https://picsum.photos/100" name="John Doe" />
        <Typography fontSize="xl">Medium</Typography>
      </Container>
      <Container flexDirection="row" alignItems="center">
        <Avatar
          imageUrl="https://picsum.photos/100"
          name="John Doe"
          variant="extra-small"
        />
        <Typography fontSize="2xs">Extra Small</Typography>
      </Container>
      <Container flexDirection="row" alignItems="center">
        <Avatar
          imageUrl="https://picsum.photos/100"
          name="John Doe"
          variant="small"
        />
        <Typography fontSize="xl">Small</Typography>
      </Container>
      <Container flexDirection="row" alignItems="center">
        <Avatar imageUrl="broken url test" name="John Doe" />
        <Typography fontSize="l">Broken image url</Typography>
      </Container>
    </Container>
  );
};
