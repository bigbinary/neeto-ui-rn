import * as React from "react";
import { Typography } from "./Typography";

export const Title1 = ({ children, rest }: any) => {
  return (
    <Typography fontSize="title1" {...rest}>
      {children}
    </Typography>
  );
};
// Typography.propTypes = {
//   fontSize: PropTypes.string,
//   color: PropTypes.string,
// };
