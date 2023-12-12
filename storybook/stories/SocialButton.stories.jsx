import React, { useContext } from "react";

import { SocialButton, Container } from "@components";
import { ThemeContext } from "styled-components/native";
import useSystemTheme from 'react-use-system-theme';

const ButtonMetaData = {
  title: "SocialButtons",
  component: SocialButton,
};

export default ButtonMetaData;

export const SocialButtons = () => {
  const systemTheme = useSystemTheme();
  const theme = useContext(ThemeContext);

  const labelStyleProp = (systemTheme === "dark" && { labelStyle: { color: theme.colors.font.grey200 } })

  return (
    <Container alignItems="center" flex={1}>
      <SocialButton {...labelStyleProp} my={9} variant="apple" />
      <SocialButton {...labelStyleProp} variant="google" />
    </Container>
  )
};
