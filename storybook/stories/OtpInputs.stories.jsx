import React, { useState } from "react";

import { Container, OtpInputs, Typography } from "@components";

import { theme } from "../../src/theme";

const OtpInputsMeta = {
  title: "OtpInputs",
  component: OtpInputs,
};
export default OtpInputsMeta;

export const OtpInputsDemo = () => {
  const [code, setCode] = useState("");
  const [code2, setCode2] = useState("");

  return (
    <Container alignItems="center" flex={1} justifyContent="center">
      <OtpInputs code={code} handleChange={setCode} numberOfInputs={6} />
      <Typography fontSize="xl" py={10}>
        Your entered OTP is {code}
      </Typography>
      <Container
        alignItems="center"
        bg="background.grey300"
        justifyContent="center"
        p={2}
      >
        <Typography fontSize="l" py={10}>
          With Custom Styles
        </Typography>
        <OtpInputs
          code={code2}
          containerStyles={{ backgroundColor: theme.colors.background.base }}
          handleChange={setCode2}
          numberOfInputs={6}
          textStyles={{
            color: theme.colors.font.white,
          }}
        />
      </Container>
    </Container>
  );
};
