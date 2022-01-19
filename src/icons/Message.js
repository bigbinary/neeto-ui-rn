import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMessage = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.636 5.045h14.727c.904 0 1.637.733 1.637 1.637v10.636c0 .904-.733 1.636-1.636 1.636H4.636A1.635 1.635 0 0 1 3 17.318V6.682c0-.904.733-1.637 1.636-1.637v0Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m3.12 6.075 7.693 5.503a2 2 0 0 0 2.325.002l7.738-5.519"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgMessage;
