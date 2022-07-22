import React from "react";

import { SocialButton, Container } from "@components";

const ButtonMetaData = {
  title: "SocialButtons",
  component: SocialButton,
};

export default ButtonMetaData;

export const SocialButtons = () => {
  return (
    <Container alignItems="center" flex={1}>
      <SocialButton variant="apple" my={9} />
      <SocialButton variant="google" />
    </Container>
  );
};
