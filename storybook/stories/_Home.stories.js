import React from "react";
import { Container, Typography } from "@components";

const TypographyStories = {
  title: "Home",
};
export default TypographyStories;

export const Home = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Typography textAlign="center" fontSize="2xl">
        Please open navigator from the bottom left tab and select a story to
        preview.
      </Typography>
    </Container>
  );
};
