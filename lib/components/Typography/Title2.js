import * as React from "react";
import { Typography } from "./Typography";

export const Title2 = ({ children, rest }: any) => {
  return (
    <Typography fontSize="title2" {...rest}>
      {children}
    </Typography>
  );
};
// Typography.propTypes = {
//   fontSize: PropTypes.string,
//   color: PropTypes.string,
// };
