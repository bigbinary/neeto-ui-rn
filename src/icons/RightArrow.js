import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRightArrow = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.483 5.988 19.52 12l-6.037 6.012M4.48 11.98h14.99H4.48Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgRightArrow;
