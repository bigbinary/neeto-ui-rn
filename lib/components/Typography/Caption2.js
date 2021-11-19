import * as React from "react";
import { Typography } from "./Typography";

export const Caption2 = ({ children, ...rest }) => {
  return (
    <Typography fontSize="caption2" fontFamily="regular" {...rest}>
      {children}
    </Typography>
  );
};
