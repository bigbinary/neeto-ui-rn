import * as React from "react";
import { Typography } from "./Typography";

export const LargeTitle = ({ children, ...rest }: any) => {
  return (
    <Typography fontSize="largeTitle" {...rest}>
      {children}
    </Typography>
  );
};
// Typography.propTypes = {
//   fontSize: PropTypes.string,
//   color: PropTypes.string,
// };
