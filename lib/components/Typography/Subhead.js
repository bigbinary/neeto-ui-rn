import * as React from "react";
import { Typography } from "./Typography";

export const Subhead = ({ children, rest }: any) => {
  return (
    <Typography fontSize="subhead" {...rest}>
      {children}
    </Typography>
  );
};
// Typography.propTypes = {
//   fontSize: PropTypes.string,
//   color: PropTypes.string,
// };
