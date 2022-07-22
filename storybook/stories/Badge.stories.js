import React from "react";
import { Badge, Container } from "@components";
import { Typography } from "@components/Typography";
import { theme } from "../../src/theme";

const fontSizes = Object.keys(theme.fontSizes);
const fontColors = Object.keys(theme.colors.font).map(color => `font.${color}`);
const fonts = Object.keys(theme.fonts);

const BadgeMetaData = {
  title: "Badge",
  component: Badge,
  args: {
    content: "test",
    size: 36,
    fontSize: fontSizes[0],
    badgeColor: "background.base",
    color: fontColors[0],
    fontFamily: fonts[0],
  },
  argTypes: {
    content: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "number",
      },
    },
    fontSize: {
      options: fontSizes,
      control: {
        type: "select",
      },
    },
    badgeColor: {
      options: fontColors,
      control: {
        type: "select",
      },
    },
    color: {
      options: fontColors,
      control: {
        type: "select",
      },
    },
    fontFamily: {
      options: fonts,
      control: {
        type: "select",
      },
    },
  },
};

export default BadgeMetaData;

export const Badges = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flex={1} justifyContent="center">
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge content={3} size={32} />
          <Typography px={2} fontSize="l">
            Custom size 32.
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge content={3} size={32} fontSize="16px" />
          <Typography px={2} fontSize="l">
            Custom fontSize
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge
            content="test"
            size={32}
            fontSize="12px"
            badgeColor="background.secondary"
            color="font.secondary"
          />
          <Typography px={2} fontSize="l">
            Custom background color
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge size={32} content="test" fontSize="12px" color="font.danger" />
          <Typography px={2} fontSize="l">
            Custom font color
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge size={32} content="test" fontSize="12px" fontFamily="sf700" />
          <Typography px={2} fontSize="l">
            Custom font family
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge content="Comment" fontSize="12px" fontFamily="sf700" />
          <Typography px={2} fontSize="l">
            Long Text
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export const BadgeDemo = args => {
  return (
    <Container justifyContent="center" alignItems="center">
      <Typography>Default</Typography>
      <Badge {...args} />
    </Container>
  );
};
