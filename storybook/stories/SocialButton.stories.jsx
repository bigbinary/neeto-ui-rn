import React, { useContext } from "react";

import { SocialButton, Container } from "@components";
import { ThemeContext } from "styled-components/native";
import useSystemTheme from 'react-use-system-theme';

const ButtonMetaData = {
  title: "SocialButtons",
  component: SocialButton,
  parameters: {
    notes: `
Buttons are touchable elements used to interact with the screen and to trigger an action.

![image](assets/screenshots/socialButton/socialButtons.png)

## Usage

>import * as React from 'react';
>import { Container, SocialButton } from '@bigbinary/neetoui-rn';
>
>export default function Main() {
>  return (
>    <Container>
>      <SocialButton variant="apple" my={moderateScale(9)} />
>      <SocialButton variant="google" />
>    </Container>
>  );
> }  
`}
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
