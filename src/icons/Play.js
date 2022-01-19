import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPlay = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="m7 18 11-6.5L7 5" fill="#68737D" />
    <Path
      d="m7 18 11-6.5L7 5v13Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgPlay;
