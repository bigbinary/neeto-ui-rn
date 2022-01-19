import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTextSize = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.313 17 8.155 6 3 17m1.031-2.2h8.25M21 17l-2.5-5-2.5 5m.5-.833h4"
      stroke="#2F3941"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgTextSize;
