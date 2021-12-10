import React from "react";

import { Container, Avatar, Typography } from "@components";
import { theme } from "../../src/theme";

const name = "Oliver Smith";
const size = 84;
const fontColors = Object.keys(theme.colors.font).map(color => `font.${color}`);
const bgColors = Object.keys(theme.colors.background).map(
  color => `background.${color}`
);

const AvatarStories = {
  title: "Avatars",
  component: Avatar,
  args: {
    name,
    size,
    fontColor: fontColors[0],
    bgColor: bgColors[0],
    imageUrl: "",
  },
  argTypes: {
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
      <Avatar {...args} size={parseInt(args.size) || 80} />
    </Container>
  );
};

export const TextSizes = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flexDirection="row" alignItems="center">
        <Avatar name="Oliver Smith" m={2} />
        <Typography fontSize="xl">82 * 82 (Default size)</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <Avatar size={48} name="Oliver Smith" m={2} />
        <Typography fontSize="l">48 * 48</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <Avatar size={42} name="Oliver Smith" m={2} />
        <Typography fontSize="m">42 * 42</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <Avatar size={32} name="Oliver Smith" m={2} />
        <Typography fontSize="s">32 * 32</Typography>
      </Container>
    </Container>
  );
};

export const TextColors = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flex={1} justifyContent="center">
        <Container flexDirection="row" alignItems="center">
          <Avatar size={42} name="Oliver Smith" m={2} fontColor="font.white" />
          <Typography fontSize="m">Font White</Typography>
        </Container>

        <Container flexDirection="row" alignItems="center">
          <Avatar size={42} name="Oliver Smith" m={2} fontColor="font.black" />
          <Typography fontSize="m">Font Black</Typography>
        </Container>

        <Container flexDirection="row" alignItems="center">
          <Avatar
            size={42}
            name="Oliver Smith"
            m={2}
            fontColor="font.secondary"
          />
          <Typography fontSize="m">Font Secondary</Typography>
        </Container>

        <Container flexDirection="row" alignItems="center">
          <Avatar size={42} name="Oliver Smith" m={2} fontColor="font.danger" />
          <Typography fontSize="m">Font Danger</Typography>
        </Container>
      </Container>
    </Container>
  );
};

export const TextBGColors = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flex={1} justifyContent="center">
        <Container flexDirection="row" alignItems="center">
          <Avatar
            size={42}
            name="Oliver Smith"
            m={2}
            bgColor="background.white"
          />
          <Typography fontSize="m">BG White</Typography>
        </Container>

        <Container flexDirection="row" alignItems="center">
          <Avatar
            size={42}
            name="Oliver Smith"
            m={2}
            bgColor="background.black"
          />
          <Typography fontSize="m">BG Black</Typography>
        </Container>

        <Container flexDirection="row" alignItems="center">
          <Avatar
            size={42}
            name="Oliver Smith"
            m={2}
            bgColor="background.secondary"
          />
          <Typography fontSize="m">BG Secondary</Typography>
        </Container>

        <Container flexDirection="row" alignItems="center">
          <Avatar
            size={42}
            name="Oliver Smith"
            m={2}
            bgColor="background.danger"
          />
          <Typography fontSize="m">BG Danger</Typography>
        </Container>
      </Container>
    </Container>
  );
};

export const ImageSizes = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flexDirection="row" alignItems="center">
        <Avatar
          imageUrl="https://picsum.photos/100"
          name="John Doe"
          margin={2}
        />
        <Typography fontSize="xl">82 * 82 (Default size)</Typography>
      </Container>
      <Container flexDirection="row" alignItems="center">
        <Avatar
          size={60}
          imageUrl="broken url test"
          name="John Doe"
          margin={3}
        />
        <Typography fontSize="l">Broken image url</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <Avatar
          size={48}
          imageUrl="https://picsum.photos/100"
          name="John Doe"
          margin={3}
        />
        <Typography fontSize="l">48 * 48</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <Avatar
          size={42}
          imageUrl="https://picsum.photos/100"
          name="John Doe"
          margin={3}
        />
        <Typography fontSize="m">42 * 42</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <Avatar
          size={32}
          imageUrl="https://picsum.photos/100"
          name="John Doe"
          margin={3}
        />
        <Typography fontSize="s">32 * 32</Typography>
      </Container>
    </Container>
  );
};
