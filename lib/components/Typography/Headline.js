import * as React from "react";
import { Typography } from "./Typography";

export const Headline = ({ children, rest }: any) => {
  return (
    <Typography fontSize="headline" {...rest}>
      {children}
    </Typography>
  );
};
// Typography.propTypes = {
//   fontSize: PropTypes.string,
//   color: PropTypes.string,
// };
