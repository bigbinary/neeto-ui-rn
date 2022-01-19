import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLeftArrowCircle = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9ZM8 12h8"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m11 15-3-3 3-3"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgLeftArrowCircle;
