import React from "react";

import { Container, Typography } from "@components";

const TypographyStories = {
  title: "Home",
};
export default TypographyStories;

export const Home = () => (
  <Container alignItems="center" flex={1} justifyContent="center">
    <Typography fontSize="2xl" textAlign="center">
      Please open navigator from the bottom left tab and select a story to
      preview.
    </Typography>
  </Container>
);
