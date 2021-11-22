import * as React from "react";
import { Typography } from "./Typography";

export const Title2 = ({ children, rest }: any) => {
  return (
    <Typography fontSize="title2" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};
