import * as React from "react";
import { Typography } from "./Typography";

export const Caption2 = ({ children, ...rest }: any) => {
  return (
    <Typography fontSize="caption2" fontFamily="regular" {...rest}>
      {children}
    </Typography>
  );
};
// Typography.propTypes = {
//   fontSize: PropTypes.string,
//   color: PropTypes.string,
// };
