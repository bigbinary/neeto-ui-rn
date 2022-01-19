import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTextCross = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 18h6a3 3 0 0 0 3-3v0M19 12H5M16 6h-5a3 3 0 0 0-3 3"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgTextCross;
