import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgExpand = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.99 11.98H4m6.987-5.992L16.998 12l-6.011 6.012M17 6v12"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgExpand;
