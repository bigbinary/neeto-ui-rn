import React, { useState } from "react";
import { Container, OtpInputs, Typography } from "@components";

const OtpInputsMeta = {
  title: "OtpInputs",
  component: OtpInputs,
};
export default OtpInputsMeta;

export const OtpInputsDemo = () => {
  const [code, setCode] = useState("");

  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <OtpInputs code={code} numberOfInputs={6} handleChange={setCode} />
      <Typography py={10} fontSize="xl">
        {`Your entered OTP is ${code}`}
      </Typography>
    </Container>
  );
};
