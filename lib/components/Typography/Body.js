import * as React from "react";
import { Typography } from "./Typography";

export const Body = ({ children, rest }: any) => {
  return (
    <Typography fontSize="body" fontFamily="regular" {...rest}>
      {children}
    </Typography>
  );
};
