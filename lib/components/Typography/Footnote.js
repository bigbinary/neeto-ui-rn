import * as React from "react";
import { Typography } from "./Typography";

export const Footnote = ({ children, rest }: any) => {
  return (
    <Typography fontSize="footnote" {...rest}>
      {children}
    </Typography>
  );
};
// Typography.propTypes = {
//   fontSize: PropTypes.string,
//   color: PropTypes.string,
// };
