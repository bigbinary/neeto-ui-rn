import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEye = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.122 9.88a3.004 3.004 0 0 1 0 4.245 3.004 3.004 0 0 1-4.245 0 3.004 3.004 0 0 1 0-4.245 3 3 0 0 1 4.245 0Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 12c0-.659.152-1.311.446-1.912C4.961 6.991 8.309 5 12 5s7.039 1.991 8.554 5.088c.294.601.446 1.253.446 1.912s-.152 1.311-.446 1.912C19.039 17.009 15.691 19 12 19s-7.039-1.991-8.554-5.088A4.346 4.346 0 0 1 3 12v0Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgEye;
