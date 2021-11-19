import * as React from "react";
import { Typography } from "./Typography";

export const Body = ({ children, rest }) => {
  return (
    <Typography fontSize="body" fontFamily="regular" {...rest}>
      {children}
    </Typography>
  );
};
