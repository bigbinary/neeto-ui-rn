import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUserCircle = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 18a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4M16 4.651a2.5 2.5 0 1 1 0 5M11.405 4.996a3.401 3.401 0 1 1-4.81 4.81 3.401 3.401 0 0 1 4.81-4.81M17 13a4 4 0 0 1 4 4"
      stroke="#87929D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgUserCircle;
