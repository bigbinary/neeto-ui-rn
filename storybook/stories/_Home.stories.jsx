import React, { useContext } from "react";

import { Container, Typography } from "@components";
import { ThemeContext } from "styled-components/native";
import useSystemTheme from 'react-use-system-theme';

const TypographyStories = {
  title: "Home",
};
export default TypographyStories;

export const Home = () => {
  const systemTheme = useSystemTheme();
  const theme = useContext(ThemeContext);

  return (
    <Container alignItems="center" flex={1} justifyContent="center">
      <Typography {...(systemTheme === "dark" && { color: theme.colors.font.grey200 })} fontSize="2xl" textAlign="center">
        Please open navigator from the bottom left tab and select a story to
        preview.
      </Typography>
    </Container>
  )
};
