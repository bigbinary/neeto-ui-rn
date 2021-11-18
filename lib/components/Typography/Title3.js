import * as React from "react";
import { Typography } from "./Typography";

export const Title3 = ({ children, rest }: any) => {
  return (
    <Typography fontSize="title3" fontFamily="regular" {...rest}>
      {children}
    </Typography>
  );
};
// Typography.propTypes = {
//   fontSize: PropTypes.string,
//   color: PropTypes.string,
// };
