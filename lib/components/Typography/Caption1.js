import * as React from "react";
import { Typography } from "./Typography";

export const Caption1 = ({ children, rest }) => {
  return (
    <Typography fontSize="caption1" fontFamily="regular" {...rest}>
      {children}
    </Typography>
  );
};
