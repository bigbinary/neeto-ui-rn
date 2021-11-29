import React from "react";

import { Typography, Container } from "@components";

const TypographyStories = {
  title: "Foundation/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
  },
};
export default TypographyStories;

export const Defaults = () => {
  return (
    <Container>
      <Typography textStyle="header">Header</Typography>
      <Typography textStyle="body">Body</Typography>
      <Typography textStyle="subtext">Subtext</Typography>
    </Container>
  );
};

export const FontSizes = () => {
  return (
    <Container>
      <Typography fontSize="xs">xs as 10px</Typography>
      <Typography fontSize="s">s as 12px</Typography>
      <Typography fontSize="m">m as 14px</Typography>
      <Typography fontSize="l">l as 18px</Typography>
      <Typography fontSize="xl">xl as 24px</Typography>
      <Typography fontSize="xxl">xxl as 32px</Typography>
    </Container>
  );
};

export const FontColors = () => {
  return (
    <Container>
      <Container backgroundColor="background.base">
        <Typography color="font.white">White</Typography>
      </Container>
      <Typography color="font.black">Black</Typography>
      <Typography color="font.base">Base</Typography>
      <Typography>Primary</Typography>
      <Typography color="font.secondary">Secondary</Typography>
      <Typography color="font.danger">Danger</Typography>
      <Typography color="font.grey100">Grey</Typography>
      <Typography color="font.grey100">Grey 100</Typography>
      <Typography color="font.grey200">Grey 200</Typography>
      <Typography color="font.grey300">Grey 300</Typography>
      <Typography color="font.grey400">Grey 400</Typography>
      <Typography color="font.grey500">Grey 500</Typography>
      <Typography color="font.grey600">Grey 600</Typography>
      <Typography color="font.grey800">Grey 800</Typography>
    </Container>
  );
};

export const FontFamilies = () => {
  return (
    <Container>
      <Typography fontFamily="inter400">Inter Regular 400</Typography>
      <Typography fontFamily="inter700">Inter Bold 700</Typography>
    </Container>
  );
};
