import * as React from "react";
import { Typography } from "./Typography";

export const Callout = ({ children, rest }) => {
  return (
    <Typography fontSize="callout" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};
