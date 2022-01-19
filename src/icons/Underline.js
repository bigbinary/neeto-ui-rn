import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUnderline = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15 5v6.667c0 .884-.369 1.732-1.025 2.357A3.59 3.59 0 0 1 11.5 15v0M8 5v6.667c0 .884.369 1.732 1.025 2.357A3.59 3.59 0 0 0 11.5 15v0M19 18.5H5"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgUnderline;
