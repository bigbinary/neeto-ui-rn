import * as React from "react";
import { Typography } from "./Typography";

export const Headline = ({ children, rest }) => {
  return (
    <Typography fontSize="headline" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};
