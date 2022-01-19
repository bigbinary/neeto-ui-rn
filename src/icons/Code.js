import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCode = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m13.78 4-3.56 16M18 8l4 4-4 4M6 16l-4-4 4-4"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgCode;
