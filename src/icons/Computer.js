import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComputer = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 3H6c-1.657 0-3 .977-3 2.182v7.636C3 14.023 4.343 15 6 15h12c1.657 0 3-.977 3-2.182V5.182C21 3.977 19.657 3 18 3Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path stroke="#68737D" strokeWidth={1.5} d="M3 11.25h18" />
    <Path
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M8.75 19.25h6.5"
    />
  </Svg>
);

export default SvgComputer;
