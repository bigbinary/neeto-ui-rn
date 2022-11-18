import React from "react";

import { SocialButton, Container } from "@components";

const ButtonMetaData = {
  title: "SocialButtons",
  component: SocialButton,
};

export default ButtonMetaData;

export const SocialButtons = () => (
  <Container alignItems="center" flex={1}>
    <SocialButton my={9} variant="apple" />
    <SocialButton variant="google" />
  </Container>
);
