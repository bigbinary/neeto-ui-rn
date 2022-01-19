import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSubdomain = props => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10ZM1 6h10"
      stroke="#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 1a7.65 7.65 0 0 1 2 5 7.65 7.65 0 0 1-2 5 7.65 7.65 0 0 1-2-5 7.65 7.65 0 0 1 2-5v0Z"
      stroke="#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgSubdomain;
