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

export const TextStyles = () => {
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
        <Typography color="font.white" fontSize="xxl">
          White
        </Typography>
      </Container>
      <Typography color="font.black" fontSize="xxl">
        Black
      </Typography>
      <Typography color="font.base" fontSize="xxl">
        Base
      </Typography>
      <Typography fontSize="xxl">Primary</Typography>
      <Typography color="font.secondary" fontSize="xxl">
        Secondary
      </Typography>
      <Typography color="font.danger" fontSize="xxl">
        Danger
      </Typography>
      <Typography color="font.grey100" fontSize="xxl">
        Grey
      </Typography>
      <Typography color="font.grey100" fontSize="xxl">
        Grey 100
      </Typography>
      <Typography color="font.grey200" fontSize="xxl">
        Grey 200
      </Typography>
      <Typography color="font.grey300" fontSize="xxl">
        Grey 300
      </Typography>
      <Typography color="font.grey400" fontSize="xxl">
        Grey 400
      </Typography>
      <Typography color="font.grey500" fontSize="xxl">
        Grey 500
      </Typography>
      <Typography color="font.grey600" fontSize="xxl">
        Grey 600
      </Typography>
      <Typography color="font.grey800" fontSize="xxl">
        Grey 800
      </Typography>
    </Container>
  );
};

export const FontFamilies = () => {
  return (
    <Container>
      <Typography fontFamily="inter400" fontSize="xxl">
        Inter Regular 400
      </Typography>
      <Typography fontFamily="inter700" fontSize="xxl">
        Inter Bold 700
      </Typography>
    </Container>
  );
};
