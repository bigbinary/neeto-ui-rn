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
    <Container flex={1} justifyContent="center" alignItems="center">
      <OtpInputs code={code} numberOfInputs={6} handleChange={setCode} />
      <Typography py={10} fontSize="xl">
        {`Your entered OTP is ${code}`}
      </Typography>
      <Container
        justifyContent="center"
        alignItems="center"
        bg="background.grey300"
        p={2}
      >
        <Typography py={10} fontSize="l">
          With Custom Styles
        </Typography>
        <OtpInputs
          code={code2}
          numberOfInputs={6}
          handleChange={setCode2}
          containerStyles={{ backgroundColor: theme.colors.background.danger }}
          textStyles={{
            color: theme.colors.font.white,
          }}
        />
      </Container>
    </Container>
  );
};
