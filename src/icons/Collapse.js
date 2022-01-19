import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCollapse = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.01 11.98H17m-6.987-5.992L4.002 12l6.011 6.012M4 6v12"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgCollapse;
