import * as React from "react";
import { Typography } from "./Typography";

export const Headline = ({ children, rest }: any) => {
  return (
    <Typography fontSize="headline" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};
