import * as React from "react";
import { Typography } from "./Typography";

export const Title1 = ({ children, rest }) => {
  return (
    <Typography fontSize="title1" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};
