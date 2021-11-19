import * as React from "react";
import { Typography } from "./Typography";

export const LargeTitle = ({ children, ...rest }) => {
  return (
    <Typography fontSize="largeTitle" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};
