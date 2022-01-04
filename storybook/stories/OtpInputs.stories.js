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
        bg="background.grey500"
      >
        <Typography py={10} fontSize="xl">
          With Custom Styles
        </Typography>
        <OtpInputs
          code={code2}
          numberOfInputs={6}
          handleChange={setCode2}
          textContainerStyle={{ backgroundColor: theme.colors.background.base }}
          textStyle={{
            color: theme.colors.font.white,
          }}
        />
      </Container>
    </Container>
  );
};
