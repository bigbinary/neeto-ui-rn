import * as React from "react";
import { Typography } from "./Typography";

export const Body = ({ children, rest }: any) => {
  return (
    <Typography fontSize="body" {...rest}>
      {children}
    </Typography>
  );
};
// Typography.propTypes = {
//   fontSize: PropTypes.string,
//   color: PropTypes.string,
// };
